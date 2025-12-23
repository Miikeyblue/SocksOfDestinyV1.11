const CACHE_NAME="sod-full-v15";
const ASSETS=[
  "./","./index.html","./app.js","./manifest.json","./logo.png",
  "./sounds/dice.wav","./sounds/steal.wav","./sounds/impact.wav","./sounds/banker.wav","./sounds/timer.wav",
  "./sounds/wheel-click.wav","./sounds/dice-roll.wav","./sounds/Shhh.mp3"
];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
