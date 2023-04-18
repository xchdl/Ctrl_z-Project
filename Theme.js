const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');
const Themes = document.querySelector('.Themes');
let currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  body.classList.add(currentTheme);
  Themes.classList.add(currentTheme);
} else {
  body.classList.add('light');
  Themes.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    Themes.classList.remove('light');
    body.classList.add('dark');
    Themes.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    Themes.classList.remove('dark');
    body.classList.add('light');
    Themes.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
});