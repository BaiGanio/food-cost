function toggleTheme() {
  const html = document.documentElement;
  const next = html.dataset.theme === "light" ? "dark" : "light";
  html.dataset.theme = next;
  localStorage.setItem("theme", next);
  updateThemeButton();
}

function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = saved;
  updateThemeButton();
}

function updateThemeButton() { 
  const btn = document.getElementById("themeSwitcher"); 
  const current = document.documentElement.dataset.theme; 
  if (btn) { btn.textContent = current === "light" ? "🌗 light" : "🌗 dark"; } 
}