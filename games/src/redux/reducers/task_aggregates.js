import {ActionType} from './../actions/tbos/action_type'

export default function taskAggregates(state= {}, action) {
  let newState = state["taskAggregates"];
  let reverseHiearchy = state["reverseHiearchy"];
  let currentTask = action.currentRoot;
  switch(action.type) {
    case ActionType.CREATE_TASK_COLLISION:

      newState = {...newState};
      newState[action.taskId] =  {};
      let taskAValue;
      let taskBValue;
      for(let key in newState[action.taskB]) {
        taskAValue = newState[action.taskA][key];
        taskBValue = newState[action.taskB][key];
        let count =  taskAValue + taskBValue;
        newState[action.taskId][key] = count;
      }
      break;
    case ActionType.DELETE_TASK:
      newState = {...newState};


      let toDeleteTaskCount = newState[action.taskId]["total"] - newState[action.taskId]["completed"] -  newState[action.taskId]["deleted"]
      let currentDeleted;

      while(currentTask != undefined) {
        currentDeleted = newState[currentTask]["deleted"];
        newState[currentTask] = {...newState[currentTask], "deleted":(currentDeleted + toDeleteTaskCount)};
        currentTask = reverseHiearchy[currentTask];
      }
      break;
    case ActionType.CREATE_TASKS:
      newState = {...newState};
      for(let task of action.tasks) {
        newState[task.id] =  {"completed": 0, "deleted": 0, "total": 1};
      }
      let totalTasksAdded = action.tasks.length;
      let currentTotal;
      while(currentTask != undefined) {
        currentTotal = newState[currentTask]["total"];
        newState[currentTask] = {...newState[currentTask], "total":(currentTotal + totalTasksAdded)};
        currentTask = reverseHiearchy[currentTask];
      }

      break;
    default:
      break;
  }
  return newState;
}
