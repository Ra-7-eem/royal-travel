/**
 * ROYAL TRAVEL & TOURISM (رويال للسياحة والسفر)
 * Packages & Offers Page Controller (packages.js) - v2.2
 * Interactive 4-tab accordion modal, hotel photo carousel, and policies
 */

document.addEventListener('DOMContentLoaded', () => {

  // Detailed Data Dictionary for each Package (Exact from user screenshots)
  const PACKAGES_DATA = {
    batumi: {
      title: 'عرض باتومي، جورجيا',
      subtitle: 'تفاصيل الباقة وصور الفندق',
      destName: 'باتومي، جورجيا',
      dateFrom: '2.12.2026',
      dateTo: '7.12.2026',
      days: '6',
      nights: '5',
      hotelName: 'Euphoria Hotel',
      stars: '★★★★★',
      roomType: 'غرفة ستاندر',
      hotelGallery: [
        { src: 'assets/faq/Georgia.jpeg', caption: 'واجهة فندق إيفوريا باتومي' },
        { src: 'assets/index/slide-1.avif', caption: 'لوبي واستقبال الفندق الفاخر' },
        { src: 'assets/index/slide-2.avif', caption: 'إطلالة بحرية بانورامية' },
        { src: 'assets/index/mosque-img.avif', caption: 'مرافق وخدمات الاستجمام' }
      ],
      flightCards: [
        {
          tag: 'رحلة الذهاب',
          deptCode: 'TLV',
          arrCode: 'BUS',
          pillTime: '07:45 - 12:00 ذهاب',
          typeBadge: 'مباشر'
        },
        {
          tag: 'رحلة العودة',
          deptCode: 'BUS',
          arrCode: 'TLV',
          pillTime: '13:25 - 13:55 عودة',
          typeBadge: 'مباشر',
          isReverse: true
        }
      ],
      hasSummaryPills: true,
      sumPillDept: 'ذهاب &nbsp; 07:45 - 12:00',
      sumPillReturn: 'عودة &nbsp; 13:25 - 13:55',
      flightRows: [
        { label: 'مدة الرحلة', val: 'ساعتان' },
        { label: 'نوع الطيران', val: 'مباشر' },
        { label: 'وزن الحقيبة', val: '23 كيلو' },
        { label: 'التوصيل من وإلى المطار', val: 'ذهاباً وإياباً' }
      ],
      boxLabel: 'السعر للفرد',
      boxSub: 'للفرد الواحد بالغرفة الزوجية',
      price: '2000',
      priceSub: 'للفرد الواحد بالغرفة الزوجية',
      servicesList: null
    },
    mauritius: {
      title: 'عرض موريشيوس',
      subtitle: 'تفاصيل الباقة وصور الفندق',
      destName: 'موريشيوس',
      dateFrom: '23.12.2026',
      dateTo: '30.12.2026',
      days: '8',
      nights: '7',
      hotelName: 'Constance Belle Mare Plage',
      stars: '★★★★★',
      roomType: 'غرفة برستيج مزدوجة',
      hotelGallery: [
        { src: 'assets/faq/Mauritius.jpeg', caption: 'واجهة فندق Constance Belle Mare Plage' },
        { src: 'assets/index/ocean-img.avif', caption: 'شاطئ وبحيرة المنتجع الفيروزية' },
        { src: 'assets/index/slide-2.avif', caption: 'المسابح الشاطئية والحدائق الاستوائية' },
        { src: 'assets/index/slide-3.avif', caption: 'الأجنحة الشاطئية الفاخرة' }
      ],
      flightCards: [
        {
          tag: 'الذهاب - الرحلة الأولى',
          deptCode: 'TLV',
          arrCode: 'ADD',
          subDate: '22 ديسمبر',
          subTime: '00:45 - 06:00',
          subDuration: '4 ساعات و 15 دقيقة'
        },
        {
          tag: 'الذهاب - الرحلة الثانية',
          deptCode: 'ADD',
          arrCode: 'MRU',
          subDate: '22 ديسمبر',
          subTime: '08:50 - 15:20',
          subDuration: '4 ساعات و 20 دقيقة'
        },
        {
          tag: 'العودة - الرحلة الأولى',
          deptCode: 'MRU',
          arrCode: 'ADD',
          subDate: '20 ديسمبر',
          subTime: '16:20 - 20:50',
          subDuration: '4 ساعات و 10 دقائق',
          isReverse: true
        },
        {
          tag: 'العودة - الرحلة الثانية',
          deptCode: 'ADD',
          arrCode: 'TLV',
          subDate: '20 ديسمبر — 21 ديسمبر',
          subTime: '23:55 - 05:00',
          subDuration: '4 ساعات و 5 دقائق',
          isReverse: true
        }
      ],
      hasSummaryPills: false,
      flightRows: [
        { label: 'مدة الترانزيت', val: '3 ساعات و 25 دقيقة' },
        { label: 'مدة الطيران', val: '8 ساعات' },
        { label: 'نوع الطيران', val: 'ترانزيت' },
        { label: 'شركة الطيران', val: 'الخطوط الجوية الإثيوبية (Ethiopian Airlines)' },
        { label: 'وزن الحقيبة', val: '25 كيلو' },
        { label: 'حقيبة اليد', val: '7 كيلو' },
        { label: 'التوصيل من وإلى المطار', val: 'متوفر' }
      ],
      boxLabel: 'السعر للفرد',
      boxSub: 'للفرد الواحد بالغرفة الزوجية',
      price: '10,000',
      priceSub: 'للفرد الواحد بالغرفة الزوجية',
      servicesList: [
        'الوجبات: إفطار وعشاء شاملان'
      ]
    },
    zanzibar: {
      title: 'عرض زنجبار',
      subtitle: 'تفاصيل الباقة وصور الفندق',
      destName: 'زنجبار',
      dateFrom: '30.12.2026',
      dateTo: '6.1.2027',
      days: '8',
      nights: '7',
      hotelName: 'Matamwe Sands',
      stars: '★★★★★',
      roomType: 'غرفة ديلوكس',
      hotelGallery: [
        { src: 'assets/faq/Zanzibar.jpeg', caption: 'واجهة فندق Matamwe Sands' },
        { src: 'assets/index/slide-1.avif', caption: 'الأجنحة الشاطئية الفاخرة' },
        { src: 'assets/index/slide-2.avif', caption: 'الإطلالات الاستوائية المحيطية' },
        { src: 'assets/index/slide-3.avif', caption: 'مرافق ومسابح المنتجع' }
      ],
      flightCards: [
        {
          tag: 'رحلة الذهاب',
          deptCode: 'TLV',
          arrCode: 'ZNZ',
          typeBadge: 'مباشر'
        },
        {
          tag: 'رحلة العودة',
          deptCode: 'ZNZ',
          arrCode: 'TLV',
          typeBadge: 'مباشر',
          isReverse: true
        }
      ],
      hasSummaryPills: false,
      flightRows: [
        { label: 'نوع الطيران', val: 'مباشر' },
        { label: 'وزن الحقيبة', val: '20 كيلو' },
        { label: 'التوصيل من وإلى المطار', val: 'متوفر' }
      ],
      boxLabel: 'ابتداءً من',
      boxSub: 'للشخص',
      price: '6,400',
      priceSub: 'ابتداءً من · للشخص',
      servicesList: [
        'الوجبات: جميع الوجبات مشمولة',
        'رحلة سياحة مع الدلافين هدية'
      ]
    }
  };

  // State
  let currentPackage = 'batumi';
  let currentGalleryIndex = 0;
  let activeGallery = [];

  // Modal DOM Elements
  const detailsModal = document.getElementById('tripDetailsModal');
  const detailsBackdrop = document.getElementById('tripDetailsBackdrop');
  const btnCloseDetails = document.getElementById('btnCloseTripDetails');
  const btnBookNow = document.getElementById('btnModalBookNow');

  const cancelModal = document.getElementById('cancellationModal');
  const cancelBackdrop = document.getElementById('cancelBackdrop');
  const btnCloseCancel = document.getElementById('btnCloseCancelModal');
  const btnDismissCancel = document.getElementById('btnDismissCancelModal');

  // Carousel DOM Elements
  const carouselImg = document.getElementById('hotelCarouselImg');
  const carouselCaption = document.getElementById('hotelCarouselCaption');
  const carouselCounter = document.getElementById('hotelCarouselCounter');
  const btnPrevHotel = document.getElementById('btnPrevHotelImg');
  const btnNextHotel = document.getElementById('btnNextHotelImg');

  // Populate Package Data in Accordion
  function renderPackageData(pkgKey) {
    const data = PACKAGES_DATA[pkgKey];
    if (!data) return;

    currentPackage = pkgKey;
    activeGallery = data.hotelGallery || [];
    currentGalleryIndex = 0;

    // Header
    const titleEl = document.getElementById('modalTripTitle');
    const subEl = document.getElementById('modalTripSubtitle');
    if (titleEl) titleEl.textContent = data.title;
    if (subEl) subEl.textContent = data.subtitle;

    // Tab 1: التواريخ
    const destNameEl = document.getElementById('accDestName');
    const dateFromEl = document.getElementById('accDateFrom');
    const dateToEl = document.getElementById('accDateTo');
    const daysEl = document.getElementById('accDaysCount');
    const nightsEl = document.getElementById('accNightsCount');
    if (destNameEl) destNameEl.textContent = data.destName;
    if (dateFromEl) dateFromEl.textContent = data.dateFrom;
    if (dateToEl) dateToEl.textContent = data.dateTo;
    if (daysEl) daysEl.textContent = data.days;
    if (nightsEl) nightsEl.textContent = data.nights;

    // Tab 2: الفندق والإقامة
    const hotelNameEl = document.getElementById('accHotelName');
    const hotelStarsEl = document.getElementById('accHotelStars');
    const roomTypeEl = document.getElementById('accRoomType');
    if (hotelNameEl) hotelNameEl.textContent = data.hotelName;
    if (hotelStarsEl) hotelStarsEl.textContent = data.stars;
    if (roomTypeEl) roomTypeEl.textContent = data.roomType;

    updateCarouselDisplay();

    // Tab 3: Render Flight Cards Dynamically
    const cardsContainer = document.getElementById('accFlightsCardsContainer');
    if (cardsContainer && data.flightCards) {
      cardsContainer.innerHTML = data.flightCards.map(fc => {
        let bottomContent = '';
        if (fc.subDate || fc.subTime || fc.subDuration) {
          bottomContent = `
            <div class="flight-card-subinfo">
              ${fc.subDate ? `<span class="flight-subinfo-date">${fc.subDate}</span>` : ''}
              ${fc.subTime ? `<span class="flight-subinfo-time">${fc.subTime}</span>` : ''}
              ${fc.subDuration ? `<span class="flight-subinfo-duration">${fc.subDuration}</span>` : ''}
            </div>
          `;
        } else if (fc.pillTime) {
          bottomContent = `
            <div class="flight-card-footer">
              <span class="flight-time-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${fc.pillTime}
              </span>
              <span class="flight-type-badge">${fc.typeBadge || 'مباشر'}</span>
            </div>
          `;
        } else if (fc.typeBadge) {
          bottomContent = `
            <div class="flight-card-footer has-no-time">
              <span class="flight-type-badge">${fc.typeBadge}</span>
            </div>
          `;
        }

        return `
          <div class="flight-card">
            <div class="flight-card-tag">${fc.tag}</div>
            <div class="flight-route-row">
              <div class="airport-point">
                <span class="airport-label">مطار الإقلاع</span>
                <span class="airport-code">${fc.deptCode}</span>
              </div>
              <div class="flight-line-wrap">
                <span class="flight-line-dash"></span>
                <div class="flight-plane-circle ${fc.isReverse ? 'plane-reverse' : ''}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
                <span class="flight-line-dash"></span>
              </div>
              <div class="airport-point">
                <span class="airport-label">مطار الهبوط</span>
                <span class="airport-code">${fc.arrCode}</span>
              </div>
            </div>
            ${bottomContent}
          </div>
        `;
      }).join('');
    }

    // Summary pills
    const summaryPillsWrap = document.getElementById('flightSummaryPills');
    const sumDeptEl = document.getElementById('sumPillDept');
    const sumRetEl = document.getElementById('sumPillReturn');
    if (summaryPillsWrap) {
      if (data.hasSummaryPills) {
        summaryPillsWrap.style.display = 'flex';
        if (sumDeptEl) sumDeptEl.innerHTML = data.sumPillDept;
        if (sumRetEl) sumRetEl.innerHTML = data.sumPillReturn;
      } else {
        summaryPillsWrap.style.display = 'none';
      }
    }

    // Render Flight Rows
    const flightRowsList = document.getElementById('accFlightRowsList');
    if (flightRowsList && data.flightRows) {
      flightRowsList.innerHTML = data.flightRows.map(row => `
        <div class="acc-info-row">
          <span class="acc-info-label">${row.label}</span>
          <span class="acc-info-val">${row.val}</span>
        </div>
      `).join('');
    }

    // Price Box
    const boxLabelEl = document.getElementById('flightBoxLabel');
    const boxPriceEl = document.getElementById('flightBoxPrice');
    const boxSubEl = document.getElementById('flightBoxSub');
    if (boxLabelEl) boxLabelEl.textContent = data.boxLabel || 'السعر للفرد';
    if (boxPriceEl) boxPriceEl.textContent = `₪ ${data.price}`;
    if (boxSubEl) boxSubEl.textContent = data.boxSub || data.priceSub;

    // Tab 4: خدمات أخرى
    const servicesContainer = document.getElementById('accOtherServicesContainer');
    if (servicesContainer) {
      if (data.servicesList && data.servicesList.length > 0) {
        servicesContainer.innerHTML = `
          <div class="acc-services-list">
            ${data.servicesList.map(item => `
              <div class="acc-service-row">
                <span class="service-row-text">${item}</span>
                <span class="service-check-icon">✓</span>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        servicesContainer.innerHTML = `
          <div class="acc-empty-text">لا توجد خدمات إضافية حالياً.</div>
        `;
      }
    }

    // Fixed Bottom Bar
    const fixedPriceEl = document.getElementById('modalFixedPrice');
    const fixedSubEl = document.getElementById('modalFixedSub');
    if (fixedPriceEl) fixedPriceEl.textContent = data.price;
    if (fixedSubEl) fixedSubEl.textContent = data.priceSub;
  }

  // Update Carousel Image & Counter
  function updateCarouselDisplay() {
    if (!activeGallery || activeGallery.length === 0) return;
    const item = activeGallery[currentGalleryIndex];
    if (carouselImg) {
      carouselImg.style.opacity = '0';
      setTimeout(() => {
        carouselImg.src = item.src;
        carouselImg.alt = item.caption;
        carouselImg.style.opacity = '1';
      }, 150);
    }
    if (carouselCaption) carouselCaption.textContent = item.caption;
    if (carouselCounter) carouselCounter.textContent = `${currentGalleryIndex + 1}/${activeGallery.length}`;
  }

  // Carousel Navigation
  if (btnPrevHotel) {
    btnPrevHotel.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeGallery.length <= 1) return;
      currentGalleryIndex = (currentGalleryIndex - 1 + activeGallery.length) % activeGallery.length;
      updateCarouselDisplay();
    });
  }

  if (btnNextHotel) {
    btnNextHotel.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeGallery.length <= 1) return;
      currentGalleryIndex = (currentGalleryIndex + 1) % activeGallery.length;
      updateCarouselDisplay();
    });
  }

  // Accordion Expand/Collapse Functionality
  document.querySelectorAll('.acc-header-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.acc-panel');
      if (!panel) return;
      const isOpen = panel.classList.contains('is-open');

      // Toggle clicked panel
      if (isOpen) {
        panel.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        // Close other panels so only one tab is open at a time (matching screenshots)
        document.querySelectorAll('.acc-panel').forEach(p => {
          p.classList.remove('is-open');
          const b = p.querySelector('.acc-header-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
        panel.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');

        // Smoothly ensure the opened panel is comfortably in view
        setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 60);
      }
    });
  });

  // Open Details Modal
  function openTripDetails(pkgKey) {
    renderPackageData(pkgKey);
    if (!detailsModal) return;
    detailsModal.classList.add('is-active');
    detailsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Reset accordion: ALL tabs closed by default (as requested by user)
    document.querySelectorAll('.acc-panel').forEach(p => {
      p.classList.remove('is-open');
      const headerBtn = p.querySelector('.acc-header-btn');
      if (headerBtn) headerBtn.setAttribute('aria-expanded', 'false');
    });

    // Reset scroll position to top
    const scrollContainer = document.getElementById('modalAccordionScroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }

  // Close Details Modal
  function closeTripDetails() {
    if (!detailsModal) return;
    detailsModal.classList.remove('is-active');
    detailsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Cancellation Modal Functions
  function openCancellationModal(pkgKey = 'batumi') {
    const data = PACKAGES_DATA[pkgKey];
    const destEl = document.getElementById('cancelPackageDest');
    if (destEl) {
      destEl.textContent = data ? data.destName : 'باتومي، جورجيا';
    }
    if (!cancelModal) return;
    cancelModal.classList.add('is-active');
    cancelModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCancellationModal() {
    if (!cancelModal) return;
    cancelModal.classList.remove('is-active');
    cancelModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Card Buttons Handlers
  document.querySelectorAll('.btn-offer-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pkgKey = btn.getAttribute('data-package') || 'batumi';
      openTripDetails(pkgKey);
    });
  });

  document.querySelectorAll('.btn-cancel-terms').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const pkgKey = btn.getAttribute('data-package') || 'batumi';
      openCancellationModal(pkgKey);
    });
  });

  // Card Box click
  document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const pkgKey = card.getAttribute('data-package') || 'batumi';
      openTripDetails(pkgKey);
    });
  });

  // Close handlers
  if (btnCloseDetails) btnCloseDetails.addEventListener('click', closeTripDetails);
  if (detailsBackdrop) detailsBackdrop.addEventListener('click', closeTripDetails);

  if (btnCloseCancel) btnCloseCancel.addEventListener('click', closeCancellationModal);
  if (btnDismissCancel) btnDismissCancel.addEventListener('click', closeCancellationModal);
  if (cancelBackdrop) cancelBackdrop.addEventListener('click', closeCancellationModal);

  // Book now button inside modal: Strictly NO WhatsApp redirect (as per user rule)
  if (btnBookNow) {
    btnBookNow.addEventListener('click', (e) => {
      e.preventDefault();
      // Button is deliberately inert for demo presentation
    });
  }

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTripDetails();
      closeCancellationModal();
    }
  });

});


