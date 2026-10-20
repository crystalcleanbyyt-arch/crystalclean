(function () {
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.querySelectorAll('[data-copy-phone]').forEach(button => {
    button.addEventListener('click', async () => {
      const number = '7633348190';
      let copied = false;
      try {
        await navigator.clipboard.writeText(number);
        copied = true;
      } catch (err) {
        const field = document.createElement('textarea');
        field.value = number;
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        copied = document.execCommand('copy');
        field.remove();
      }
      button.textContent = copied ? 'Copied!' : 'Tap and hold the number to copy';
    });
  });
  document.querySelectorAll('[data-track-lead]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof ndp === 'function') ndp('track', 'LEAD');
    });
  });
  const form = document.getElementById('estimate-form');
  if (form) {
    form.addEventListener('submit', () => {
      if (typeof ndp === 'function') ndp('track', 'LEAD');
    });
  }
})();
