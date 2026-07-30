// Card catalog drawers — one open at a time
const drawers = document.querySelectorAll('.drawer');

drawers.forEach((drawer) => {
  const tab = drawer.querySelector('.drawer-tab');
  tab.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');

    drawers.forEach((d) => {
      d.classList.remove('is-open');
      d.querySelector('.drawer-tab').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      drawer.classList.add('is-open');
      tab.setAttribute('aria-expanded', 'true');
    }
  });
});

// Scroll reveal for section headings
const revealTargets = document.querySelectorAll('.about, .catalog, .events, .visit');
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Newsletter form — visual demo only.
// This does not send anywhere. Wire it to a form service
// (Formspree, Getform, etc.) to actually collect emails.
const form = document.getElementById('newsletter-form');
const status = document.getElementById('newsletter-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletter-email').value;
  status.textContent = `Added ${email} — demo only, not actually sent anywhere.`;
  form.reset();
});
