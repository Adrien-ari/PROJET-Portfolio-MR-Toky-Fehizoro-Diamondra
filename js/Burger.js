const burgerBtn  = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay    = document.getElementById('overlay');

function toggleMenu(forceClose = false) {
  const isOpen = burgerBtn.classList.contains('open');
  if (forceClose || isOpen) {
    burgerBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('visible');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  } else {
    burgerBtn.classList.add('open');
    mobileMenu.classList.add('open');
    overlay.classList.add('visible');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
}

burgerBtn.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu(true));
mobileMenu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => toggleMenu(true))
);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleMenu(true);
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) toggleMenu(true);
});