"use strict";
document.querySelectorAll("[data-language]").forEach(link => {
  link.addEventListener("click", () => {
    try { localStorage.setItem("loopkit.language", link.dataset.language); } catch { }
  });
});
