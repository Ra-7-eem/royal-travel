/**
 * ROYAL TRAVEL & TOURISM (رويال للسياحة والسفر)
 * Core Interactivity & Luxury UI Experience
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. HERO SLIDER LOGIC (01 — 03)
  // ==========================================
  const slides = document.querySelectorAll('.hero-slide');
  const counterCurrent = document.getElementById('counterCurrent');
  const sliderCounter = document.getElementById('sliderCounter');
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  let slideInterval = null;

  const slideData = [
    {
      titleAccent: "نصنع من السفر تجربة",
      titleSub: "استثنائية",
      description: "في رويال للسياحة والسفر نؤمن أن السفر ليس مجرد وجهة، بل تجربة تبدأ من اللحظة التي تقرر فيها الانطلاق. نختار لك الوجهات بعناية، ونصمم رحلتك وفق احتياجاتك، لنمنحك تجربة تجمع بين الراحة، الفخامة، والدقة في كل التفاصيل. من الرحلات السياحية الفاخرة والعطلات الخاصة، إلى حجوزات الطيران والفنادق وتنظيم برامج السفر المتكاملة، نرافقك بخبرة واهتمام يليقان بك. وجهتك علينا... وتجربتك رويال."
    },
    {
      titleAccent: "عواصم ساحرة وتجارب",
      titleSub: "ملكية لا تُنسى",
      description: "اكتشف أرقى العواصم الأوروبية وقمم جبال الألب السويسرية والريفييرا الفرنسية بأعلى معايير الرفاهية والخصوصية مع سيارات خاصة وخدمات كونسيرج على مدار الساعة تلبي أدق تطلعاتك."
    },
    {
      titleAccent: "استجمام استوائي وفلل خاصة",
      titleSub: "فوق الماء",
      description: "عش سحر جزر المالديف وبالي في أجنحة وفلل عائمة خاصة مع مسابح لا متناهية وشواطئ بيضاء منعزلة صُممت خصيصاً لمن يبحثون عن أقصى درجات الهدوء والتميز."
    }
  ];

  const titleAccentEl = document.querySelector('.title-accent');
  const titleSubEl = document.querySelector('.title-sub');
  const heroDescEl = document.getElementById('heroDesc');

  function goToSlide(index) {
    if (!slides.length) return;
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (index + totalSlides) % totalSlides;
    slides[currentSlideIndex].classList.add('active');

    // Update counter text (padded with 0)
    if (counterCurrent) {
      counterCurrent.textContent = String(currentSlideIndex + 1).padStart(2, '0');
    }

    // Smoothly update texts if available
    const data = slideData[currentSlideIndex];
    if (data && titleAccentEl && titleSubEl && heroDescEl) {
      titleAccentEl.style.opacity = '0';
      titleSubEl.style.opacity = '0';
      heroDescEl.style.opacity = '0';

      setTimeout(() => {
        titleAccentEl.textContent = data.titleAccent;
        titleSubEl.textContent = data.titleSub;
        heroDescEl.textContent = data.description;
        titleAccentEl.style.transition = 'opacity 0.4s ease';
        titleSubEl.style.transition = 'opacity 0.4s ease';
        heroDescEl.style.transition = 'opacity 0.4s ease';
        titleAccentEl.style.opacity = '1';
        titleSubEl.style.opacity = '1';
        heroDescEl.style.opacity = '1';
      }, 250);
    }
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, 7500);
  }

  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (sliderCounter) {
    sliderCounter.addEventListener('click', () => {
      nextSlide();
      startAutoSlide(); // Reset timer on manual click
    });
  }

  // Mobile Touch Swipe Support for Hero Slider
  const heroSection = document.getElementById('home');
  if (heroSection) {
    let touchStartX = 0;
    let touchEndX = 0;
    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          goToSlide(currentSlideIndex - 1);
        } else {
          nextSlide();
        }
        startAutoSlide();
      }
    }, { passive: true });
  }

  startAutoSlide();

  // ==========================================
  // 2. MOBILE NAVIGATION TOGGLE
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  }

  // ==========================================
  // 3. SMOOTH NAVIGATION & ACTION BUTTONS
  // ==========================================
  const customTripCard = document.getElementById('custom-trip');
  const destContainer = document.getElementById('destinations');

  const heroPrimaryBtn = document.getElementById('heroPrimaryBtn');
  if (heroPrimaryBtn && customTripCard) {
    heroPrimaryBtn.addEventListener('click', () => {
      customTripCard.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const heroSecondaryBtn = document.getElementById('heroSecondaryBtn');
  if (heroSecondaryBtn && destContainer) {
    heroSecondaryBtn.addEventListener('click', () => {
      destContainer.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const openPlannerBtn = document.getElementById('openPlannerBtn');
  if (openPlannerBtn && customTripCard) {
    openPlannerBtn.addEventListener('click', () => {
      customTripCard.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const openPlannerBtnMobile = document.getElementById('openPlannerBtnMobile');
  if (openPlannerBtnMobile && customTripCard) {
    openPlannerBtnMobile.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      customTripCard.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // زر كرت "صمّم رحلتك الخاصة" (خامل حالياً ولا يحول على الواتساب لحين استكمال تصميمه للديمو)
  const openTripModalBtn = document.getElementById('openTripModalBtn');
  if (openTripModalBtn) {
    openTripModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // لا يقوم بأي تحويل لحين اعتماد وتصميم باقي التجربة للديمو
    });
  }

  // Card 2 Navigation to Packages & Offers
  const cardPackages = document.getElementById('cardPackages');
  if (cardPackages) {
    cardPackages.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        window.location.href = 'packages.html';
      }
    });
  }

  // Card 3 Navigation to FAQ
  const cardFaq = document.getElementById('cardFaq');
  if (cardFaq) {
    cardFaq.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        window.location.href = 'faq.html';
      }
    });
  }

  // ==========================================
  // 4. SUPPORT & CONTACT WHATSAPP FORM
  // ==========================================
  const supportForm = document.getElementById('supportWhatsappForm');
  const supportName = document.getElementById('supportName');
  const supportPhone = document.getElementById('supportPhone');
  const supportMessage = document.getElementById('supportMessage');
  const btnSubmitSupport = document.getElementById('btnSubmitSupport');

  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = supportName ? supportName.value.trim() : '';
      const phoneVal = supportPhone ? supportPhone.value.trim() : '';
      const messageVal = supportMessage ? supportMessage.value.trim() : '';

      // Validation
      if (!nameVal) {
        if (supportName) {
          supportName.focus();
          supportName.style.borderColor = '#e53e3e';
          setTimeout(() => { supportName.style.borderColor = ''; }, 2500);
        }
        return;
      }

      if (!messageVal) {
        if (supportMessage) {
          supportMessage.focus();
          supportMessage.style.borderColor = '#e53e3e';
          setTimeout(() => { supportMessage.style.borderColor = ''; }, 2500);
        }
        return;
      }

      // Format clean luxury message
      const formattedMessage = 
`مرحباً رويال للسياحة والسفر،
لدي استفسار عبر الموقع الإلكتروني:

👤 الاسم: ${nameVal}
📱 رقم التواصل: ${phoneVal || 'غير محدد'}

💬 نص الاستفسار:
${messageVal}`;

      // Open in WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Visual feedback
      if (btnSubmitSupport) {
        const originalContent = btnSubmitSupport.innerHTML;
        btnSubmitSupport.innerHTML = `<span>تم التحويل إلى واتساب ✓</span>`;
        btnSubmitSupport.style.background = '#25D366';
        btnSubmitSupport.style.color = '#ffffff';

        setTimeout(() => {
          btnSubmitSupport.innerHTML = originalContent;
          btnSubmitSupport.style.background = '';
          btnSubmitSupport.style.color = '';
        }, 3000);
      }
    });
  }

});

