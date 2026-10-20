(function () {
  const items = window.CLEANING_GALLERY || [];
  const grid = document.getElementById('gallery-grid');
  const dialog = document.getElementById('gallery-dialog');
  if (!grid || !dialog) return;

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }
  function photo(src, alt, label) {
    const figure = node('figure');
    const image = node('img');
    image.src = src;
    image.alt = alt;
    image.loading = 'lazy';
    figure.appendChild(image);
    if (label) figure.appendChild(node('figcaption', 'photo-label', label));
    return figure;
  }
  function openDetail(item) {
    document.getElementById('dialog-title').textContent = item.title;
    const content = document.getElementById('dialog-content');
    content.replaceChildren();
    content.className = 'dialog-grid' + (item.type === 'single' ? ' single' : '');
    if (item.type === 'single') {
      content.appendChild(photo(item.image, item.title));
    } else {
      const before = photo(item.before, item.title + ' before cleaning');
      before.appendChild(node('figcaption', null, 'Before'));
      const after = photo(item.after, item.title + ' after cleaning');
      after.appendChild(node('figcaption', null, 'After'));
      content.append(before, after);
    }
    dialog.showModal();
  }

  items.forEach(item => {
    const card = node('button', 'gallery-card');
    card.type = 'button';
    card.setAttribute('aria-label', 'View photos: ' + item.title);
    const pair = node('div', item.type === 'single' ? 'gallery-single' : 'gallery-pair');
    if (item.type === 'single') {
      pair.appendChild(photo(item.image, item.title, 'Recent work'));
    } else {
      pair.appendChild(photo(item.before, item.title + ' before', 'Before'));
      pair.appendChild(photo(item.after, item.title + ' after', 'After'));
    }
    const info = node('div', 'gallery-card-info');
    info.appendChild(node('h3', null, item.title));
    info.appendChild(node('p', null, item.description || 'Real cleaning results'));
    card.append(pair, info);
    card.addEventListener('click', () => openDetail(item));
    grid.appendChild(card);
  });

  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
