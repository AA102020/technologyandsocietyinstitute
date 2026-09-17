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

    const publicationFigure = document.querySelector('.publication-article article > .publication-image');
    if (publicationFigure) {
      const targetParagraph = Array.from(document.querySelectorAll('.publication-article article > p')).find(function (paragraph) {
        return paragraph.textContent.trim().startsWith('Human-Interest AI will become difficult to oppose because it will work.');
      });
      if (targetParagraph && publicationFigure.nextElementSibling !== targetParagraph) {
        targetParagraph.before(publicationFigure);
      }

      const image = publicationFigure.querySelector('img');
      if (image) {
        const chunkPaths = [
          'assets/hia-image-01a.txt','assets/hia-image-01b.txt','assets/hia-image-01c.txt','assets/hia-image-01d.txt',
          'assets/hia-image-02a.txt','assets/hia-image-02b1.txt','assets/hia-image-02b2.txt','assets/hia-image-02c.txt','assets/hia-image-02d.txt',
          'assets/hia-image-03a.txt','assets/hia-image-03b.txt','assets/hia-image-03c.txt','assets/hia-image-03d.txt',
          'assets/hia-image-04.txt','assets/hia-image-05.txt','assets/hia-image-06.txt','assets/hia-image-07.txt','assets/hia-image-08.txt'
        ];
        Promise.all(chunkPaths.map(function (path) {
          return fetch(path).then(function (response) {
            if (!response.ok) throw new Error('Unable to load Human-Interest AI image');
            return response.text();
          });
        })).then(function (parts) {
          image.src = 'data:image/jpeg;base64,' + parts.join('');
        }).catch(function () {
          // Retain the repository image if the enhanced image cannot be loaded.
        });
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
      else if (media.addListener) media.addListener('change', followSystem);
    }
  });
})();
