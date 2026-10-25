/**
 * ROYAL TRAVEL & TOURISM (رويال للسياحة والسفر)
 * Packages & Offers Page Controller (packages.js)
 */

document.addEventListener('DOMContentLoaded', () => {

  // أزرار وكروت استعراض العروض خاملة حالياً ولا تقوم بأي تحويل للواتساب للديمو
  document.querySelectorAll('.dest-card-box').forEach(card => {
    card.addEventListener('click', (e) => {
      // لا يقوم بأي تحويل لحين اعتماد تفاصيل وتصميم العروض
    });
  });

  document.querySelectorAll('.btn-card-faq').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // خامل للديمو
    });
  });

});
