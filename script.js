const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const lightbox = document.getElementById('lightbox');

if (lightbox) {
  const titleEl = document.getElementById('lightbox-title');
  const beforeEl = document.getElementById('lightbox-before');
  const afterEl = document.getElementById('lightbox-after');

  document.querySelectorAll('.gallery-open').forEach(card => {
    card.addEventListener('click', () => {
      titleEl.textContent = card.dataset.title || 'Before & After';
      beforeEl.src = card.dataset.before;
      afterEl.src = card.dataset.after;
      lightbox.classList.add('open');
    });
  });

  const closeBtn = document.getElementById('close-lightbox');

  const closeLightbox = () => {
    lightbox.classList.remove('open');
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof ndp === 'function') {
      ndp('track', 'LEAD');
    }
  });
});

const estimateForm = document.getElementById('estimate-form');
if (estimateForm) {
  estimateForm.addEventListener('submit', () => {
    if (typeof ndp === 'function') {
      ndp('track', 'LEAD');
    }
  });
}