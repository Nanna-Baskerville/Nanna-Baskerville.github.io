/* Light-box mínimo en 10 líneas */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  document.body.appendChild(overlay);

  document.querySelectorAll('.lightbox-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const img = document.createElement('img');
      img.src = link.href;
      overlay.innerHTML = '';          // limpia overlay antes de usarlo
      overlay.appendChild(img);
      overlay.classList.add('open');
    });
  });

  overlay.addEventListener('click', () => overlay.classList.remove('open'));
});
