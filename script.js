const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.navigation')) closeMenu();
});
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Hello The Perfect Reel Maker! I would like to check availability.',
    `Name: ${data.get('name').trim()}`,
    `Event date: ${data.get('date')}`,
    `City / venue: ${data.get('city').trim()}`,
    `Collection: ${data.get('package')}`,
    data.get('details').trim() ? `Details: ${data.get('details').trim()}` : ''
  ].filter(Boolean).join('\n');
  window.location.assign(`https://wa.me/917505393953?text=${encodeURIComponent(message)}`);
});
