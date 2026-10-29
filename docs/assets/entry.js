"use strict";
let code = "en";
try { const saved = localStorage.getItem("loopkit.language"); if (["en","ru","es","zh-Hans"].includes(saved)) code = saved; else { const lang = navigator.language.toLowerCase(); code = lang.startsWith("zh") ? "zh-Hans" : lang.startsWith("ru") ? "ru" : lang.startsWith("es") ? "es" : "en"; } } catch { }
location.replace(new URL(code + "/index.html", location.href));
