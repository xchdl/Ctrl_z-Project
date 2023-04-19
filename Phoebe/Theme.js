let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
  setTheme('default');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'default') {
    document.getElementById('switcher-id').href = 'default.css';
  } else if (theme == 'night') {
    document.getElementById('switcher-id').href = 'night.css';
  } else if (theme == 'comfort') {
    document.getElementById('switcher-id').href = 'comfort.css';
  }
  localStorage.setItem('style', theme);
}