let CURRENT_LANG = "en";

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(el => {
    const key = el.dataset.lang;
    if (LANG[lang] && LANG[lang][key]) {
      el.textContent = LANG[lang][key];
    }
  });
}

function setLanguage(lang) {
  CURRENT_LANG = lang; localStorage.setItem("lang", lang); applyLanguage(lang);;
}

function loadLanguage() {
  CURRENT_LANG = localStorage.getItem("lang") || "en"; 
  applyLanguage(CURRENT_LANG); 
  return CURRENT_LANG;  
}

window.addEventListener("DOMContentLoaded", () => {
  const current = loadLanguage();

  const btn = document.getElementById("langSwitcher");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = CURRENT_LANG === "en" ? "bg" : "en";
      setLanguage(next);
    });
  }
});
