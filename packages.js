/**
 * ROYAL TRAVEL & TOURISM (رويال للسياحة والسفر)
 * Packages & Offers Page Controller (packages.js)
 */

document.addEventListener('DOMContentLoaded', () => {

  // Make each destination card clickable as a whole
  document.querySelectorAll('.dest-card-box').forEach(card => {
    card.addEventListener('click', (e) => {
      // If the user didn't click directly on an anchor link inside, trigger the link
      if (!e.target.closest('a')) {
        const link = card.querySelector('a.btn-card-faq');
        if (link && link.href) {
          window.open(link.href, link.target || '_self');
        }
      }
    });

    // Accessible keyboard Enter / Space navigation
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const link = card.querySelector('a.btn-card-faq');
        if (link && link.href) {
          window.open(link.href, link.target || '_self');
        }
      }
    });
  });

});
