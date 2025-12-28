document.addEventListener('DOMContentLoaded', () => {
  const ensureHomeButton = (container) => {
    if (!container) return;
    if (!container.querySelector('.nav-home-link')) {
      const homeBtn = document.createElement('a');
      homeBtn.href = path_to_root + 'index.html';
      homeBtn.className = 'nav-home-link';
      homeBtn.textContent = 'Back to Start';
      container.prepend(homeBtn);
    }
  };

  ensureHomeButton(document.querySelector('.nav-wrapper'));
  ensureHomeButton(document.querySelector('.nav-wide-wrapper'));

  const navLinks = document.querySelectorAll('.nav-wrapper a, .nav-wide-wrapper a');
  navLinks.forEach(link => {
    const title = link.getAttribute('title');
    if (title && !link.dataset.labelled) {
      link.dataset.labelled = '1';
      link.innerHTML = <span class="nav-label"></span>;
    }
  });
});
