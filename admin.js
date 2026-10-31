/**
 * ROYAL TRAVEL & TOURISM (رويال للسياحة والسفر)
 * Admin Dashboard Controller (admin.js) - v1.3
 * Handles published offers view, edit/delete actions, transit fields toggle, and modal popup form
 */

document.addEventListener('DOMContentLoaded', () => {

  // Initial Sample Offers (Matching packages.html)
  const DEFAULT_OFFERS = [
    {
      id: 'batumi',
      destName: 'باتومي، جورجيا',
      coverImg: 'assets/faq/Georgia.jpeg',
      dateFrom: '2026-12-02',
      dateTo: '2026-12-07',
      days: '6',
      nights: '5',
      hotelName: 'Euphoria Hotel',
      roomType: 'غرفة ستاندر',
      stars: 5,
      flightType: 'مباشر',
      airline: 'الخطوط الجورجية',
      timeFrom: '07:45',
      timeTo: '12:00',
      baggage: '23',
      transfer: 'ذهاب وإياب',
      currency: '₪',
      price: '2000'
    },
    {
      id: 'zanzibar',
      destName: 'زنجبار',
      coverImg: 'assets/faq/Zanzibar.jpeg',
      dateFrom: '2027-01-15',
      dateTo: '2027-01-22',
      days: '8',
      nights: '7',
      hotelName: 'Matemwe Sands',
      roomType: 'فيلا شاطئية',
      stars: 5,
      flightType: 'مباشر',
      airline: 'فلاي دبي',
      timeFrom: '09:00',
      timeTo: '16:30',
      baggage: '20',
      transfer: 'ذهاب وإياب',
      currency: '₪',
      price: '6400'
    },
    {
      id: 'mauritius',
      destName: 'موريشيوس',
      coverImg: 'assets/faq/Mauritius.jpeg',
      dateFrom: '2026-12-23',
      dateTo: '2026-12-30',
      days: '8',
      nights: '7',
      hotelName: 'Constance Belle Mare Plage',
      roomType: 'غرفة برستيج مزدوجة',
      stars: 5,
      flightType: 'ترانزيت',
      airline: 'الخطوط الإثيوبية',
      timeFrom: '00:45',
      timeTo: '15:20',
      transitDepAirport: 'مطار دبي الدولي',
      transitArrAirport: 'مطار سير سيووساغور رامغولام',
      transitFlightDuration: '5 ساعات 30 دقيقة',
      transitLayoverDuration: '2 ساعات 50 دقيقة',
      baggage: '23',
      transfer: 'ذهاب وإياب',
      currency: '₪',
      price: '10000'
    }
  ];

  // State: load from localStorage if available, or initialize with defaults
  let offers = [];
  try {
    const saved = localStorage.getItem('royal_admin_offers');
    offers = saved ? JSON.parse(saved) : DEFAULT_OFFERS;
  } catch (e) {
    offers = DEFAULT_OFFERS;
  }

  function saveOffersToStorage() {
    try {
      localStorage.setItem('royal_admin_offers', JSON.stringify(offers));
    } catch (e) {
      console.warn('Storage not accessible:', e);
    }
  }

  // DOM Elements
  const publishedGrid = document.getElementById('publishedOffersGrid');
  const emptyState = document.getElementById('offersEmptyState');
  const offersCountEl = document.getElementById('offersCountNumber');
  const btnScrollToAdd = document.getElementById('btnScrollToAddForm');

  const offerForm = document.getElementById('adminOfferForm');
  const editingIdInput = document.getElementById('editingOfferId');
  const formHeaderTitle = document.getElementById('formHeaderTitle');
  const formModeBadge = document.getElementById('formModeBadge');
  const btnSubmitText = document.getElementById('btnSubmitText');
  const btnCancelEdit = document.getElementById('btnCancelEdit');

  // Form Fields
  const destNameInput = document.getElementById('destNameInput');
  const dateFromInput = document.getElementById('dateFromInput');
  const dateToInput = document.getElementById('dateToInput');
  const daysCountInput = document.getElementById('daysCountInput');
  const nightsCountInput = document.getElementById('nightsCountInput');
  const hotelNameInput = document.getElementById('hotelNameInput');
  const roomTypeInput = document.getElementById('roomTypeInput');
  const flightTypeSelect = document.getElementById('flightTypeSelect');
  const airlineNameInput = document.getElementById('airlineNameInput');
  const flightTimeFromInput = document.getElementById('flightTimeFromInput');
  const flightTimeToInput = document.getElementById('flightTimeToInput');

  // Transit Details Fields (Matching Screenshot 2)
  const transitDetailsBlock = document.getElementById('transitDetailsBlock');
  const transitDepAirportInput = document.getElementById('transitDepAirportInput');
  const transitArrAirportInput = document.getElementById('transitArrAirportInput');
  const transitFlightDurationInput = document.getElementById('transitFlightDurationInput');
  const transitLayoverDurationInput = document.getElementById('transitLayoverDurationInput');

  const baggageWeightInput = document.getElementById('baggageWeightInput');
  const airportTransferVal = document.getElementById('airportTransferVal');
  const currencySelect = document.getElementById('currencySelect');
  const packagePriceInput = document.getElementById('packagePriceInput');
  // Modal DOM Elements
  const offerModal = document.getElementById('offerFormModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const adminModalScroll = document.getElementById('adminModalScroll');

  // Open & Close Modal Functions
  function openOfferModal(isEdit = false) {
    if (!offerModal) return;
    offerModal.classList.add('is-active');
    offerModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (adminModalScroll) adminModalScroll.scrollTop = 0;
  }

  function closeOfferModal() {
    if (!offerModal) return;
    offerModal.classList.remove('is-active');
    offerModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeOfferModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeOfferModal);

  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offerModal && offerModal.classList.contains('is-active')) {
      closeOfferModal();
    }
  });

  // Function to show/hide Transit Details block dynamically
  function toggleTransitBlock() {
    if (!transitDetailsBlock || !flightTypeSelect) return;
    if (flightTypeSelect.value === 'ترانزيت') {
      transitDetailsBlock.style.display = 'block';
    } else {
      transitDetailsBlock.style.display = 'none';
    }
  }

  if (flightTypeSelect) {
    flightTypeSelect.addEventListener('change', toggleTransitBlock);
  }

  // Single Destination Image Elements
  const destImageUploadBox = document.getElementById('destImageUploadBox');
  const destImageFileInput = document.getElementById('destImageFileInput');
  const destUploadContent = document.getElementById('destUploadContent');
  const destImagePreviewWrap = document.getElementById('destImagePreviewWrap');
  const destImagePreviewImg = document.getElementById('destImagePreviewImg');
  const btnRemoveDestImg = document.getElementById('btnRemoveDestImg');
  let currentDestCoverUrl = '';

  // Multiple Hotel Images Elements
  const hotelImagesUploadBox = document.getElementById('hotelImagesUploadBox');
  const hotelImagesFileInput = document.getElementById('hotelImagesFileInput');
  const hotelThumbnailsGrid = document.getElementById('hotelThumbnailsGrid');
  let currentHotelImagesList = [];

  // Toast Notification
  const toastEl = document.getElementById('adminToast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimer = null;

  function showToast(msg, isSuccess = true) {
    if (!toastEl) return;
    if (toastMsg) toastMsg.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // RENDER PUBLISHED OFFERS
  // =========================================================================
  function renderPublishedOffers() {
    if (!publishedGrid || !offersCountEl || !emptyState) return;

    offersCountEl.textContent = offers.length;

    if (offers.length === 0) {
      publishedGrid.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    publishedGrid.style.display = 'grid';

    publishedGrid.innerHTML = offers.map(item => {
      const starsString = '★'.repeat(item.stars || 5);
      const cover = item.coverImg || 'assets/faq/Georgia.jpeg';

      return `
        <div class="offer-item-card" data-id="${item.id}">
          <div class="offer-item-cover">
            <img src="${cover}" alt="${item.destName}" class="offer-cover-img" onerror="this.src='assets/faq/Georgia.jpeg'">
            <span class="offer-item-badge">${item.flightType || 'مباشر'}</span>
          </div>

          <div class="offer-item-content">
            <h3 class="offer-item-dest">${item.destName}</h3>
            <div class="offer-item-hotel">
              <span>${item.hotelName}</span>
              <span class="stars">${starsString}</span>
            </div>
            <div class="offer-item-dates">
              ${item.dateFrom || ''} → ${item.dateTo || ''} (${item.days || ''} أيام)
            </div>

            <div class="offer-item-footer">
              <span class="offer-item-price">${item.currency || '₪'} ${Number(item.price || 0).toLocaleString()}</span>
              
              <div class="offer-actions-wrap">
                <button type="button" class="btn-action btn-action-edit" data-edit-id="${item.id}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  <span>تعديل</span>
                </button>
                <button type="button" class="btn-action btn-action-delete" data-delete-id="${item.id}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                  <span>حذف</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Click Events for Edit & Delete
    publishedGrid.querySelectorAll('.btn-action-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-edit-id');
        loadOfferIntoForm(id);
      });
    });

    publishedGrid.querySelectorAll('.btn-action-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-delete-id');
        deleteOffer(id);
      });
    });
  }

  // =========================================================================
  // DELETE OFFER
  // =========================================================================
  function deleteOffer(id) {
    const target = offers.find(o => o.id === id);
    if (!target) return;

    const confirmed = confirm(`هل أنت متأكد من حذف عرض "${target.destName}"؟`);
    if (!confirmed) return;

    offers = offers.filter(o => o.id !== id);
    saveOffersToStorage();
    renderPublishedOffers();
    showToast(`تم حذف عرض "${target.destName}" بنجاح.`);

    // If deleting currently edited offer, reset form
    if (editingIdInput.value === id) {
      resetFormToAddMode();
    }
  }

  // =========================================================================
  // LOAD OFFER INTO FORM (EDIT MODE)
  // =========================================================================
  function loadOfferIntoForm(id) {
    const item = offers.find(o => o.id === id);
    if (!item) return;

    editingIdInput.value = item.id;
    if (formHeaderTitle) formHeaderTitle.textContent = `تعديل عرض: ${item.destName}`;
    if (formModeBadge) formModeBadge.textContent = 'وضع التعديل';
    if (btnSubmitText) btnSubmitText.textContent = 'حفظ التعديلات';
    if (btnCancelEdit) btnCancelEdit.style.display = 'inline-block';

    // Populate Fields
    destNameInput.value = item.destName || '';
    dateFromInput.value = item.dateFrom || '';
    dateToInput.value = item.dateTo || '';
    daysCountInput.value = item.days || '';
    nightsCountInput.value = item.nights || '';
    hotelNameInput.value = item.hotelName || '';
    roomTypeInput.value = item.roomType || '';
    flightTypeSelect.value = item.flightType || 'مباشر';
    toggleTransitBlock();
    if (transitDepAirportInput) transitDepAirportInput.value = item.transitDepAirport || '';
    if (transitArrAirportInput) transitArrAirportInput.value = item.transitArrAirport || '';
    if (transitFlightDurationInput) transitFlightDurationInput.value = item.transitFlightDuration || '';
    if (transitLayoverDurationInput) transitLayoverDurationInput.value = item.transitLayoverDuration || '';

    airlineNameInput.value = item.airline || '';
    flightTimeFromInput.value = item.timeFrom || '';
    flightTimeToInput.value = item.timeTo || '';
    baggageWeightInput.value = item.baggage || '';
    currencySelect.value = item.currency || '₪';
    packagePriceInput.value = item.price || '';

    // Star Rating
    setStarRating(item.stars || 5);

    // Transfer Pill
    setTransferPill(item.transfer || 'ذهاب وإياب');

    // Cover Image Preview
    currentDestCoverUrl = item.coverImg || '';
    if (currentDestCoverUrl) {
      destImagePreviewImg.src = currentDestCoverUrl;
      destImagePreviewWrap.style.display = 'block';
      destUploadContent.style.display = 'none';
    } else {
      resetDestCoverPreview();
    }

    // Open Modal in Edit Mode
    openOfferModal(true);
  }

  // =========================================================================
  // RESET FORM TO ADD MODE
  // =========================================================================
  function resetFormToAddMode() {
    editingIdInput.value = '';
    offerForm.reset();

    if (formHeaderTitle) formHeaderTitle.textContent = 'إضافة عرض جديد';
    if (formModeBadge) formModeBadge.textContent = 'عرض جديد';
    if (btnSubmitText) btnSubmitText.textContent = 'حفظ ونشر العرض';

    if (flightTypeSelect) flightTypeSelect.value = 'مباشر';
    toggleTransitBlock();
    if (transitDepAirportInput) transitDepAirportInput.value = '';
    if (transitArrAirportInput) transitArrAirportInput.value = '';
    if (transitFlightDurationInput) transitFlightDurationInput.value = '';
    if (transitLayoverDurationInput) transitLayoverDurationInput.value = '';

    setStarRating(5);
    setTransferPill('ذهاب وإياب');
    resetDestCoverPreview();
    currentHotelImagesList = [];
    renderHotelThumbnails();
  }

  if (btnCancelEdit) {
    btnCancelEdit.addEventListener('click', () => {
      resetFormToAddMode();
      closeOfferModal();
    });
  }

  if (btnScrollToAdd) {
    btnScrollToAdd.addEventListener('click', () => {
      resetFormToAddMode();
      openOfferModal(false);
    });
  }

  // =========================================================================
  // STAR RATING PICKER LOGIC (Matching Screenshot 3)
  // =========================================================================
  const starBtns = document.querySelectorAll('.star-btn');
  const starLabel = document.getElementById('starCountLabel');

  function setStarRating(rating) {
    const r = parseInt(rating, 10) || 5;
    if (hotelStarsVal) hotelStarsVal.value = r;

    starBtns.forEach(btn => {
      const btnRating = parseInt(btn.getAttribute('data-rating'), 10);
      if (btnRating <= r) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (starLabel) {
      starLabel.textContent = `${r} نجوم`;
    }
  }

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const rating = btn.getAttribute('data-rating');
      setStarRating(rating);
    });
  });

  // =========================================================================
  // PILL TOGGLE GROUP (AIRPORT TRANSFER - Matching Screenshot 4)
  // =========================================================================
  const transferPillBtns = document.querySelectorAll('#transferToggleGroup .pill-btn');

  function setTransferPill(val) {
    if (airportTransferVal) airportTransferVal.value = val;
    transferPillBtns.forEach(btn => {
      if (btn.getAttribute('data-val') === val) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  transferPillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val');
      setTransferPill(val);
    });
  });

  // =========================================================================
  // IMAGE UPLOADS & LOCAL PREVIEWS
  // =========================================================================

  // Single Destination Cover Image
  if (destImageUploadBox && destImageFileInput) {
    destImageUploadBox.addEventListener('click', (e) => {
      if (e.target.closest('.btn-remove-preview')) return;
      destImageFileInput.click();
    });

    destImageFileInput.addEventListener('change', () => {
      const file = destImageFileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          currentDestCoverUrl = e.target.result;
          destImagePreviewImg.src = currentDestCoverUrl;
          destImagePreviewWrap.style.display = 'block';
          destUploadContent.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  function resetDestCoverPreview() {
    currentDestCoverUrl = '';
    if (destImageFileInput) destImageFileInput.value = '';
    if (destImagePreviewImg) destImagePreviewImg.src = '';
    if (destImagePreviewWrap) destImagePreviewWrap.style.display = 'none';
    if (destUploadContent) destUploadContent.style.display = 'flex';
  }

  if (btnRemoveDestImg) {
    btnRemoveDestImg.addEventListener('click', (e) => {
      e.stopPropagation();
      resetDestCoverPreview();
    });
  }

  // Multiple Hotel Images
  if (hotelImagesUploadBox && hotelImagesFileInput) {
    hotelImagesUploadBox.addEventListener('click', () => {
      hotelImagesFileInput.click();
    });

    hotelImagesFileInput.addEventListener('change', () => {
      const files = Array.from(hotelImagesFileInput.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          currentHotelImagesList.push(e.target.result);
          renderHotelThumbnails();
        };
        reader.readAsDataURL(file);
      });
    });
  }

  function renderHotelThumbnails() {
    if (!hotelThumbnailsGrid) return;
    hotelThumbnailsGrid.innerHTML = currentHotelImagesList.map((src, idx) => `
      <div class="thumb-preview-item">
        <img src="${src}" class="thumb-preview-img" alt="صورة الفندق">
        <button type="button" class="thumb-btn-remove" data-thumb-idx="${idx}" aria-label="حذف الصورة">✕</button>
      </div>
    `).join('');

    hotelThumbnailsGrid.querySelectorAll('.thumb-btn-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-thumb-idx'), 10);
        currentHotelImagesList.splice(idx, 1);
        renderHotelThumbnails();
      });
    });
  }

  // =========================================================================
  // SUBMIT FORM (ADD / UPDATE OFFER)
  // =========================================================================
  offerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEditing = Boolean(editingIdInput.value);
    const offerId = isEditing ? editingIdInput.value : `pkg_${Date.now()}`;

    // Construct Offer Object
    const offerData = {
      id: offerId,
      destName: destNameInput.value.trim(),
      coverImg: currentDestCoverUrl || 'assets/faq/Georgia.jpeg',
      dateFrom: dateFromInput.value,
      dateTo: dateToInput.value,
      days: daysCountInput.value,
      nights: nightsCountInput.value,
      hotelName: hotelNameInput.value.trim(),
      roomType: roomTypeInput.value.trim(),
      stars: parseInt(hotelStarsVal.value, 10) || 5,
      hotelImages: [...currentHotelImagesList],
      flightType: flightTypeSelect.value,
      airline: airlineNameInput.value.trim() || 'طيران رويال',
      timeFrom: flightTimeFromInput.value || '07:45',
      timeTo: flightTimeToInput.value || '12:00',
      transitDepAirport: transitDepAirportInput ? transitDepAirportInput.value.trim() : '',
      transitArrAirport: transitArrAirportInput ? transitArrAirportInput.value.trim() : '',
      transitFlightDuration: transitFlightDurationInput ? transitFlightDurationInput.value.trim() : '',
      transitLayoverDuration: transitLayoverDurationInput ? transitLayoverDurationInput.value.trim() : '',
      baggage: baggageWeightInput.value || '23',
      transfer: airportTransferVal.value || 'ذهاب وإياب',
      currency: currencySelect.value || '₪',
      price: packagePriceInput.value || '2000'
    };

    if (isEditing) {
      const index = offers.findIndex(o => o.id === offerId);
      if (index !== -1) {
        offers[index] = offerData;
      }
      showToast(`تم تحديث عرض "${offerData.destName}" بنجاح!`);
    } else {
      offers.unshift(offerData); // Add to top of list
      showToast(`تم نشر عرض "${offerData.destName}" بنجاح!`);
    }

    saveOffersToStorage();
    renderPublishedOffers();
    resetFormToAddMode();
    closeOfferModal();
  });

  // Initial Render
  renderPublishedOffers();

});
