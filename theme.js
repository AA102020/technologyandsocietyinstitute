(function () {
  const storageKey = 'tsi-theme';
  const root = document.documentElement;

  function preferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  }

  applyTheme(preferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    const pathname = window.location.pathname.replace(/\/+$/, '');
    const isHomepage = pathname === '' || pathname === '/' || pathname.endsWith('/index.html');

    if (isHomepage) {
      const header = document.querySelector('.site-header');
      const nav = header && header.querySelector('nav');
      if (header && nav) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'theme-toggle';
        button.setAttribute('aria-label', 'Switch color theme');

        function syncButton() {
          const dark = root.dataset.theme === 'dark';
          button.textContent = dark ? 'Light' : 'Dark';
          button.setAttribute('aria-pressed', dark ? 'true' : 'false');
          button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
        }

        button.addEventListener('click', function () {
          const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
          localStorage.setItem(storageKey, next);
          applyTheme(next);
          syncButton();
        });

        nav.appendChild(button);
        syncButton();
      }
    }

    if (window.matchMedia) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const followSystem = function (event) {
        if (!localStorage.getItem(storageKey)) {
          applyTheme(event.matches ? 'dark' : 'light');
          const button = document.querySelector('.theme-toggle');
          if (button) {
            const dark = root.dataset.theme === 'dark';
            button.textContent = dark ? 'Light' : 'Dark';
            button.setAttribute('aria-pressed', dark ? 'true' : 'false');
            button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
          }
        }
      };
      if (media.addEventListener) media.addEventListener('change', followSystem);
      else if (media.addListener) media.addListener(followSystem);
    }
  });
})();
