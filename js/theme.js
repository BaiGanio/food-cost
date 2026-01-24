const THEMES = ["light", "dark", "cosmic", "cosmic-retro"];
const saved = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  const body = document.body;

  // Remove all theme classes
  THEMES.forEach(t => body.classList.remove(t));

  // Add the selected theme
  body.classList.add(theme);

  // Save
  localStorage.setItem("theme", theme);

  // Update button text
  updateThemeButton(theme);
}

function toggleTheme() {
  const current = localStorage.getItem("theme") || "light";
  const index = THEMES.indexOf(current);
  const next = THEMES[(index + 1) % THEMES.length];
  applyTheme(next);
}

function updateThemeButton(theme) {
  const btn = document.getElementById("themeSwitcher");
  if (!btn) return;

  const labels = {
    light: "🌞 Light",
    dark: "🌙 Dark",
    cosmic: "🪐 Cosmic",
    "cosmic-retro": "🌈 Retro"
  };

  btn.textContent = labels[theme] || "Theme";
}

function loadTheme() {
  applyTheme(saved);
}

window.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const btn = document.getElementById("themeSwitcher");
  if (btn) btn.addEventListener("click", toggleTheme);
});
