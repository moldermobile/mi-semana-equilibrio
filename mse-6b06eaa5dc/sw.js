const C='mse-a43e9637';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icono-192.png'])))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok||r.type==='opaque'){const k=r.clone();caches.open(C).then(c=>c.put(e.request,k))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(w=>w.length?w[0].focus():clients.openWindow('./')))});
