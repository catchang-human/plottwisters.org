"use strict";var precacheConfig=[["/games/dist/check-mark-256.png","f92062f20f7631ec4fffe5178791d2d3"],["/games/dist/fontawesome-webfont.152c194f.ttf","b06871f281fee6b241d60582ae9369b9"],["/games/dist/fontawesome-webfont.4a2277d0.eot","674f50d287a8c48dc19ba404d20fe713"],["/games/dist/fontawesome-webfont.4e039e70.woff","fee66e712a8a08eef5805a46892932ad"],["/games/dist/fontawesome-webfont.80db1567.eot","674f50d287a8c48dc19ba404d20fe713"],["/games/dist/fontawesome-webfont.9ab71dbb.svg","912ec66d7572ff821749319396470bde"],["/games/dist/fontawesome-webfont.9fb3877d.woff2","af7ae505a9eed503f8b8e6982036873e"],["/games/dist/fontawesome-webfont.a9acc805.svg","912ec66d7572ff821749319396470bde"],["/games/dist/fontawesome-webfont.c3cf7ef2.woff","fee66e712a8a08eef5805a46892932ad"],["/games/dist/fontawesome-webfont.cda54bb3.woff2","af7ae505a9eed503f8b8e6982036873e"],["/games/dist/fontawesome-webfont.cf80d36a.ttf","b06871f281fee6b241d60582ae9369b9"],["/games/dist/index.html","d6a71316a8266ee7945f3b5a15e0c3b0"],["/games/dist/service-worker.js","109321d37c9210a831add4df566508b9"],["/games/dist/src.04e9093b.js","24b3b225397cd2fa711b5b53d0135289"],["/games/dist/src.63e56bf7.css","cbb875c984adeb47a9e74b737a2bf1a7"],["/games/dist/src.94599484.css","92b872bd2a1d79e6e4c3e07b438c08bc"],["/games/dist/src.e31bb0bc.css","f2eaabae691d57f09606cac876ea441d"],["/games/dist/src.ebbb5c0d.css","5c915f34ea22dd7adb0dff531a006119"],["/games/dist/styles.c86c3119.css","46ca46b176461528e4ac627943fc69ef"],["/games/dist/styles.d25a5498.css","3b19816c10c760f02d9f8ef3a0d1d2db"],["/games/dist/trash-2-256.png","87fb86ca7b8c1ded2493dd59bc613d14"]],cacheName="sw-precache-v3-games-plottwister-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/games/dist/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});