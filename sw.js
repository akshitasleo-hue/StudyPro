self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("studypro").then(cache=>{
      return cache.addAll([
        "index.html",
        "subject.html",
        "quiz.html",
        "style.css",
        "script.js"
      ]);
    })
  );
});
