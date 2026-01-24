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
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function loadLanguage() {
  const saved = localStorage.getItem("lang") || "en";
  applyLanguage(saved);
  return saved;
}

window.addEventListener("DOMContentLoaded", () => {
  const current = loadLanguage();

  const btn = document.getElementById("langSwitcher");
  if (btn) {
    btn.addEventListener("click", () => {
      const next = current === "en" ? "bg" : "en";
      setLanguage(next);
      location.reload(); // refresh UI text
    });
  }
});
