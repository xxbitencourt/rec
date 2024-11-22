let cache ="rec"
let file=["/", "index.html", "/css/style.css", "/js/main.js"];


self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(cache).then(function(ca){
        return c.addAll(file)
    })
    ); 
});

self.addEventListener("fetch", (e)=>{
    e.respondWidth(
        caches.open(cache).then((response) =>{
            return response || fetch(e.request)
        })
    );
});
window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};