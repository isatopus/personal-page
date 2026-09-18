const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
const menuLabel = menuButton.querySelector('.sr-only');

function setMenu(open) {
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Close navigation' : 'Open navigation';
}

menuButton.addEventListener('click', () => {
  setMenu(!navigation.classList.contains('open'));
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
    setMenu(false);
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];

if ('IntersectionObserver' in window) {
  const activeSectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${visible.target.id}`;
      if (isCurrent) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-35% 0px -55%', threshold: [0, 0.25, 0.6] });

  sections.forEach((section) => activeSectionObserver.observe(section));
}
