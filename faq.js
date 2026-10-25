/**
 * ROYAL TRAVEL & TOURISM (رويال للسياحة والسفر)
 * FAQ Page Interactive Engine & Destination Knowledge Base
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA STORE: ALL 8 DESTINATIONS & FAQ ITEMS
  // =========================================================================
  const destinationData = {
    bali: {
      id: "bali",
      nameAr: "بالي",
      nameEn: "Bali",
      tagline: "معابد وشواطئ وحقول أرز",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى بالي",
      image: "assets/faq/Bali.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "document",
          q: "ما هي إجراءات الدخول إلى بالي؟",
          a: "يتطلب الدخول جواز سفر ساري المفعول لمدة لا تقل عن 6 أشهر من تاريخ السفر، وتعبئة الإقرار الجمركي الإلكتروني الإندونيسي (e-CD) عبر الإنترنت قبل الوصول بـ 3 أيام، مع سداد ضريبة السياحة في بالي (حوالي 150,000 روبية) عبر البوابة الرسمية Love Bali."
        },
        {
          icon: "plane",
          q: "هل يوجد طيران مباشر إلى بالي؟",
          a: "تتوفر رحلات موسمية مباشرة من بعض مطارات الخليج، بالإضافة إلى رحلات ترانزيت منتظمة ويومية ممتازة ومريحة جداً عبر الخطوط القطرية، طيران الإمارات، أو الخطوط السنغافورية بتوقف قصير وخدمات فاخرة."
        },
        {
          icon: "passport",
          q: "هل أحتاج إلى تأشيرة؟",
          a: "يحصل مواطنو دول مجلس التعاون الخليجي والعديد من الدول العربية على تأشيرة سياحية فورية عند الوصول (Visa on Arrival - VoA) في المطار لمدة 30 يوماً قابلة للتمديد، أو التقديم المسبق عبر البوابة الإلكترونية الرسمية (e-VoA)."
        },
        {
          icon: "calendar",
          q: "ما أفضل وقت لزيارة بالي؟",
          a: "الفترة من أبريل إلى أكتوبر تُعتبر الموسم الجاف والمثالي، حيث تتميز بأجواء مشمسة وممتعة ورطوبة معتدلة، وهي الأنسب للاستمتاع بالشواطئ والأنشطة والمنتجعات الفاخرة وحقول الأرز الخضراء."
        },
        {
          icon: "hotel",
          q: "ما الفنادق التي توفرها رويال للسياحة والسفر في بالي؟",
          a: "نوفر اختيارات حصرية من أرقى المنتجعات العالمية والفلل الخاصة الفاخرة (5 نجوم) المجهزة بمسابح خاصة في أشهر مناطق بالي: أوبود (وسط الطبيعة والغابات)، وسيمينياك، ونوسا دوا، وأولواتو مع إطلالات المحيط البانورامية."
        },
        {
          icon: "car",
          q: "هل النقل من المطار مشمول؟",
          a: "نعم، تتضمن جميع باقات رويال للسياحة والسفر استقبالاً VIP خاصاً في مطار نجوراه راي بسيارة حديثة فاخرة وسائق خاص يتولى نقلك مباشرة إلى مقر إقامتك بأعلى معايير الراحة والخصوصية."
        },
        {
          icon: "activity",
          q: "هل يمكن إضافة برنامج رحلات إلى الباقة؟",
          a: "بكل تأكيد، نصمم لك برنامج رحلات يومي مخصص يشمل معبد تانا لوت، مزارع أرز تيجالالانج، شلالات تيجينونجان، تجربة الأرجوحة الشهيرة (Bali Swing)، والرياضات المائية في نوسا دوا."
        },
        {
          icon: "currency",
          q: "ما العملة المستخدمة في بالي؟",
          a: "الروبية الإندونيسية (IDR). وتُقبل بطاقات الائتمان الدولية (Visa و Mastercard) في غالبية الفنادق والمطاعم الكبرى، وننصح بحمل مبالغ نقدية للمشتريات من الأسواق الشعبية."
        },
        {
          icon: "cutlery",
          q: "هل السعر يشمل جميع الوجبات؟",
          a: "تشمل الباقات الأساسية بوفيه إفطار يومي فاخر في الفندق. كما يمكننا ترقية الحجز ليشمل نصف إقامة أو إقامة كاملة، وترتيب تجارب عشاء رومانسية خاصة على شاطئ البحر أو وسط الطبيعة."
        }
      ]
    },

    thailand: {
      id: "thailand",
      nameAr: "تايلند",
      nameEn: "Thailand",
      tagline: "جزر استوائية ومدن نابضة",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى تايلند",
      image: "assets/faq/Thailand.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "passport",
          q: "ما شروط وتأشيرة السفر إلى تايلند؟",
          a: "يحصل مواطنو المملكة العربية السعودية ومعظم دول الخليج على إعفاء كامل من التأشيرة لمدة تصل إلى 60 يوماً، مع اشتراط صلاحية الجواز لمدة لا تقل عن 6 أشهر وتذكرة عودة مؤكدة."
        },
        {
          icon: "calendar",
          q: "ما أفضل وقت لزيارة تايلند؟",
          a: "الفترة من نوفمبر إلى أوائل أبريل هي الفترة الذهبية؛ حيث الطقس جاف ومعتدل ودرجات الحرارة لطيفة، وهي الأنسب لزيارة الجزر والشواطئ الاستوائية."
        },
        {
          icon: "activity",
          q: "ما أفضل المدن والجزر التي تنصحون بدمجها في جدول الرحلة؟",
          a: "نوصي ببرنامج سياحي متكامل يجمع بين جزيرة بوكيت (للشواطئ والجزر البحرية وجزر بي بي)، وكوه ساموي (للفخامة والاستجمام والهدوء)، والعاصمة بانكوك (للتسوق والمعالم العصرية الفخمة)."
        },
        {
          icon: "hotel",
          q: "ما هي مستويات الفنادق والمنتجعات التي توفرونها في تايلند؟",
          a: "نختار لك نخبة من المنتجعات والفلل الشاطئية الخاصة 5 نجوم (مثل أنانتارا، فور سيزونز، وبانيان تري) ذات المسابح الخاصة والإطلالات المباشرة على بحر أندامان."
        },
        {
          icon: "car",
          q: "هل يتوفر سائق ومرشد خاص يتحدث العربية؟",
          a: "نعم، نوفر أسطول سيارات VIP فاخرة مع سائقين محترفين ومرشدين سياحيين ذوي خبرة لمرافقتك طوال فترة الجولات والتنقلات بكل سلاسة وأمان."
        },
        {
          icon: "cutlery",
          q: "هل الطعام الحلال متوفر بسهولة في تايلند؟",
          a: "نعم، يتوفر الطعام الحلال والمطاعم العربية والخليجية والعالمية بكثرة في بوكيت وبانكوك وساموي، ونزودك بدليل خاص بأرقى المطاعم الحلال المعتمدة."
        }
      ]
    },

    mauritius: {
      id: "mauritius",
      nameAr: "موريشيوس",
      nameEn: "Mauritius",
      tagline: "بحيرات فيروزية وهدوء راقٍ",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى موريشيوس",
      image: "assets/faq/Mauritius.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "passport",
          q: "هل يحتاج مواطنو الخليج والدول العربية إلى تأشيرة لموريشيوس؟",
          a: "يُعفى مواطنو دول الخليج والعديد من الدول العربية من تأشيرة الدخول المسبقة، ويُمنحون ختماً سياحياً مجانياً فورياً في المطار لمدة تصل إلى 90 يوماً."
        },
        {
          icon: "calendar",
          q: "ما أفضل شهور السنة لزيارة موريشيوس؟",
          a: "من مايو إلى ديسمبر تكون الأجواء معتدلة ولطيفة جداً، مع نسيم بحري عليل ومعدلات رطوبة منخفضة، وتعتبر وجهة استجمام راقية على مدار العام."
        },
        {
          icon: "activity",
          q: "ما هي أبرز الأنشطة والتجارب السياحية في موريشيوس؟",
          a: "السباحة مع الدلافين في خليج تامارين، رحلات اليخوت الخاصة إلى جزيرة إيل أو سيرف، زيارة أرض السبعة ألوان وشلالات تشاماريل، وجولات طائرات الهليكوبتر لمشاهدة الشلال الغارق تحت الماء."
        },
        {
          icon: "hotel",
          q: "ما الذي يميز باقات شهر العسل والعائلات مع رويال في موريشيوس؟",
          a: "نوفر مزايا ملكية حصرية تشمل ترقيات مجانية للغرف والفلل الشاطئية، جلسات مساج وسبا للأزواج، عشاء رومانسي خاص على الشاطئ، وسيارات مرسيدس خاصة للتنقلات."
        }
      ]
    },

    zanzibar: {
      id: "zanzibar",
      nameAr: "زنجبار",
      nameEn: "Zanzibar",
      tagline: "ستون تاون وشواطئ البهارات",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى زنجبار",
      image: "assets/faq/Zanzibar.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "passport",
          q: "هل يحتاج المسافر إلى تأشيرة لدخول زنجبار وتنزانيا؟",
          a: "يمكن استخراج التأشيرة السياحية بسهولة عبر البوابة الإلكترونية الرسمية، أو الحصول عليها فوراً عند الوصول في مطار زنجبار الدولي لمعظم الجنسيات العربية."
        },
        {
          icon: "calendar",
          q: "ما أفضل أوقات السفر إلى زنجبار؟",
          a: "الفترة من يونيو إلى أكتوبر، وكذلك من ديسمبر إلى فبراير؛ حيث تتميز بأجواء مشمسة وجافة والشواطئ الفيروزية تكون في أبهى حالاتها الساحرة."
        },
        {
          icon: "hotel",
          q: "أين تقع أفضل شواطئ زنجبار للإقامة الفاخرة؟",
          a: "تتركز أرقى المنتجعات العالمية في شواطئ نونغوي (Nungwi) وكينغوا (Kendwa) في شمال الجزيرة، حيث لا تتأثر بحركة المد والجزر ويتسنى للضيوف السباحة طوال اليوم."
        },
        {
          icon: "activity",
          q: "ما أهم المعالم التي يتضمنها البرنامج السياحي؟",
          a: "زيارة المدينة التاريخية ستون تاون، جزيرة السلاحف العملاقة (Prison Island)، رحلات السنوركلينج في جزيرة منيمبا الخاصة، ومزارع التوابل والبهارات الزنجبارية الشهيرة."
        }
      ]
    },

    dubai: {
      id: "dubai",
      nameAr: "دبي",
      nameEn: "Dubai",
      tagline: "أفق حديث وصحراء ذهبية",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى دبي",
      image: "assets/faq/Dubai.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "hotel",
          q: "ما الفنادق والمنتجعات التي توفرها رويال في دبي؟",
          a: "نوفر حجوزات حصرية في أرقى أيقونات الضيافة: أتلانتس ذا رويال، برج العرب، منتجع ون آند أونلي رويال ميراج، وفنادق بولغري وبولمان ونخلة جميرا بأسعار ومزايا كونسيرج خاصة."
        },
        {
          icon: "calendar",
          q: "ما أفضل فترة لزيارة دبي؟",
          a: "من أكتوبر إلى أبريل؛ حيث تكون درجات الحرارة معتدلة وممتعة للغاية ومناسبة للفعاليات المفتوحة، الشواطئ، رحلات السفاري الصحراوية، واليخوت الفاخرة."
        },
        {
          icon: "activity",
          q: "هل تنظمون رحلات وتجارب حصرية في دبي؟",
          a: "نعم، ننظم رحلات سفاري صحراوية VIP بسيارات رنج روفر خاصة وعشاء ملكي تحت النجوم، وتأجير يخوت خاصة بجولات المارينا ونخلة جميرا، وتذاكر الصالات الخاصة لأبرز المعالم."
        },
        {
          icon: "car",
          q: "هل تشمل الباقة الاستقبال في صالات الطيران الخاص والمطار؟",
          a: "نعم، نقدم خدمة الاستقبال والتوديع VIP من باب الطائرة (خدمة أهلاً ومرحباً)، والتنقل بسيارات فارهة (مرسيدس S-Class أو رولز رويس) مع سائق خاص على مدار الساعة."
        }
      ]
    },

    srilanka: {
      id: "srilanka",
      nameAr: "سريلانكا",
      nameEn: "Sri Lanka",
      tagline: "شاي ومنارات وتراث عريق",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى سريلانكا",
      image: "assets/faq/Sri Lanka.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "passport",
          q: "ما طريقة استخراج تأشيرة سريلانكا السياحية؟",
          a: "التقديم يتم إلكترونياً وبكل سهولة عبر نظام التأشيرة الإلكترونية (ETA)، وتصدر الموافقة السريعة خلال فترة وجيزة لجميع الجنسيات."
        },
        {
          icon: "activity",
          q: "ما أجمل الأماكن والمدن لزيارتها في سريلانكا؟",
          a: "كاندي (بحيرتها وطبيعتها الجبلية)، ونوراليا (عاصمة الضباب ومزارع الشاي والشلالات)، وبينتوتة (الشواطئ والرياضات النهرية والبحرية)، وحديقة يالا الوطنية لرحلات السفاري."
        },
        {
          icon: "train",
          q: "كيف يتم التنقل بين المدن الجبلية والشاطئية في سريلانكا؟",
          a: "نخصص لك سيارة حديثة ومريحة مع سائق خبير طوال الرحلة، بالإضافة إلى ترتيب مقاعد الدرجة الأولى في قطار الشاي الجبلي الشهير بين كاندي وإيلا الذي يُعد من أروع رحلات القطار في العالم."
        },
        {
          icon: "hotel",
          q: "ما نوع المنتجعات والفنادق المتاحة؟",
          a: "نختار لك منتجعات بوتيك فاخرة وسط مزارع الشاي التاريخية، وفنادق 5 نجوم شاطئية راقية على المحيط الهندي مع خدمات سبا متخصصة واستجمام استثنائي."
        }
      ]
    },

    azerbaijan: {
      id: "azerbaijan",
      nameAr: "أذربيجان",
      nameEn: "Azerbaijan",
      tagline: "باكو الحديثة وجبال القوقاز",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى أذربيجان",
      image: "assets/faq/Azerbaijan.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1584880560604-fa73f3c3d52c?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "passport",
          q: "كيف يتم استخراج تأشيرة أذربيجان؟",
          a: "يحصل مواطنو دول مجلس التعاون الخليجي على تأشيرة فورية عند الوصول في مطار حيدر علييف الدولي، كما تتوفر التأشيرة الإلكترونية الميسرة (ASAN Visa) لبقية الجنسيات وتصدر خلال ساعات معدودة."
        },
        {
          icon: "calendar",
          q: "ما هي أفضل المدن التي ننصح بزيارتها في أذربيجان؟",
          a: "العاصمة باكو (أبراج الشعلة، المدينة القديمة، البوليفارد البحري)، ومنتجع قبالا الجبلي الساحر (شلالات وتلفريك)، ومنطقة شاهداغ الجبلية المتميزة بالأنشطة الترفيهية والتزلج شتاءً."
        },
        {
          icon: "cutlery",
          q: "هل الوجهة ملائمة للعائلات والأطفال؟",
          a: "أذربيجان من أكثر الوجهات أماناً وملاءمة للعائلات؛ الطعام جميعه حلال وشهي ومتنوع، والأسعار مناسبة جداً، والشعب مضياف ودود يرحب بالزوار العرب بحفاوة."
        },
        {
          icon: "car",
          q: "هل توفرون سيارات عائلية وسائقين يتحدثون العربية؟",
          a: "نعم، نوفر فانات وسيارات VIP عائلية حديثة ومكيفة مع سائقين محترفين يتحدثون العربية ومرشدين سياحيين لمرافقتك في كافة الجولات والتنقلات الجبلية."
        }
      ]
    },

    georgia: {
      id: "georgia",
      nameAr: "جورجيا",
      nameEn: "Georgia",
      tagline: "أديرة جبلية وطبيعة خضراء",
      heroDesc: "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك إلى جورجيا",
      image: "assets/faq/Georgia.jpeg",
      fallbackImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
      questions: [
        {
          icon: "passport",
          q: "هل يتطلب السفر إلى جورجيا تأشيرة مسبقة؟",
          a: "يدخل مواطنو دول الخليج ومقيمو الإقامات الخليجية السارية جورجيا بدون أي تأشيرة مسبقة لمدة تصل إلى 90 يوماً بكل سهولة ويسر."
        },
        {
          icon: "activity",
          q: "ما أفضل خطة لبرنامج سياحي متكامل في جورجيا؟",
          a: "برنامج 8 إلى 10 أيام يجمع بين العاصمة تبليسي وتلفريك ناريكالا، جبال القوقاز الشامخة في كازبيجي وجوداوري، غابات ومنتجعات بورجومي العلاجية، وشواطئ باتومي على البحر الأسود."
        },
        {
          icon: "calendar",
          q: "ما هو أفضل وقت للزيارة؟",
          a: "من مايو حتى سبتمبر للتمتع بالطبيعة الخضراء الخلابة والأجواء العائلية المعتدلة، بينما الفترة من ديسمبر إلى مارس لعشاق الثلوج والرياضات الشتوية في منتجعات جوداوري وبكورياني."
        },
        {
          icon: "car",
          q: "هل السيارات مجهزة للمناطق الجبلية والعائلات؟",
          a: "نعم، نوفر سيارات دفع رباعي وفانات مرسيدس فيتو وسبرنتر حديثة ومجهزة بأعلى درجات الأمان والراحة للرحلات الجبلية، مع سائقين أمناء ومرشدين يتحدثون العربية."
        }
      ]
    }
  };

  // =========================================================================
  // 2. ICON GENERATOR
  // =========================================================================
  function getIconSvg(type) {
    switch (type) {
      case 'passport':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="3"></rect>
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M7 17h10"></path>
        </svg>`;
      case 'document':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>`;
      case 'plane':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>`;
      case 'calendar':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>`;
      case 'hotel':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 21h18"></path>
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
          <line x1="9" y1="13" x2="9.01" y2="13"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="9" y1="17" x2="9.01" y2="17"></line>
          <line x1="15" y1="17" x2="15.01" y2="17"></line>
        </svg>`;
      case 'car':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.7 2 10.9 2 11v5c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>`;
      case 'activity':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>`;
      case 'currency':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>`;
      case 'cutlery':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path>
          <path d="M15 11v11"></path>
          <path d="M6 2v20"></path>
          <path d="M4 2v4a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2"></path>
        </svg>`;
      case 'train':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="3" width="16" height="16" rx="2"></rect>
          <path d="M4 11h16"></path>
          <path d="M12 3v8"></path>
          <path d="m8 19-2 3"></path>
          <path d="m16 19 2 3"></path>
          <circle cx="8" cy="15" r="1"></circle>
          <circle cx="16" cy="15" r="1"></circle>
        </svg>`;
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`;
    }
  }

  // Chevron SVG for Accordion
  const chevronSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>`;

  // =========================================================================
  // 3. DOM ELEMENTS
  // =========================================================================
  const gridView = document.getElementById('destinationsGridView');
  const detailView = document.getElementById('countryDetailView');
  const heroMainHeading = document.getElementById('heroMainHeading');
  const heroCountryBadge = document.getElementById('heroCountryBadge');
  const heroSubheading = document.getElementById('heroSubheading');
  const heroBgLayer = document.getElementById('heroBgLayer');
  const btnBackCountries = document.getElementById('btnBackCountries');
  const countryAccordionList = document.getElementById('countryAccordionList');
  const btnStartPlanning = document.getElementById('btnStartPlanning');
  const btnOtherDestinations = document.getElementById('btnOtherDestinations');

  // Default Hero State (Overview)
  const defaultHeroBg = "assets/faq/faq-hero.avif";
  const defaultHeroTitle = "الأسئلة الشائعة";
  const defaultHeroSub = "أهم الأسئلة والإجابات لمساعدتك في التخطيط لرحلتك قبل الانطلاق";

  let currentCountryId = null;

  // =========================================================================
  // 4. VIEW CONTROLLER FUNCTIONS
  // =========================================================================
  function showOverview(smoothScroll = true) {
    currentCountryId = null;
    
    // Toggle views
    detailView.classList.add('hidden');
    gridView.classList.remove('hidden');

    // Update Top Nav
    if (btnBackCountries) {
      btnBackCountries.style.display = 'none';
    }

    // Reset Hero Content
    heroMainHeading.textContent = defaultHeroTitle;
    heroCountryBadge.textContent = "";
    heroCountryBadge.style.display = "none";
    heroSubheading.textContent = defaultHeroSub;
    heroBgLayer.style.backgroundImage = `url('${defaultHeroBg}')`;

    // Clear hash without reload
    if (window.location.hash) {
      history.pushState(null, null, ' ');
    }

    if (smoothScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function showCountry(countryId, smoothScroll = true) {
    const data = destinationData[countryId];
    if (!data) {
      showOverview();
      return;
    }

    currentCountryId = countryId;

    // Toggle views
    gridView.classList.add('hidden');
    detailView.classList.remove('hidden');

    // Update Top Nav
    if (btnBackCountries) {
      btnBackCountries.style.display = 'inline-flex';
    }

    // Update Hero Content
    heroMainHeading.textContent = "الأسئلة الشائعة";
    heroCountryBadge.textContent = data.nameAr;
    heroCountryBadge.style.display = "block";
    heroSubheading.textContent = data.heroDesc;

    // Update Hero Background Image with local asset and fallback
    heroBgLayer.style.backgroundImage = `url('${data.image}'), url('${data.fallbackImage}')`;

    // Render Country Questions
    renderCountryQuestions(data);

    if (btnStartPlanning) {
      btnStartPlanning.onclick = (e) => {
        e.preventDefault();
      };
    }

    // Update URL hash
    window.location.hash = countryId;

    if (smoothScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // =========================================================================
  // 5. RENDER ACCORDIONS
  // =========================================================================
  function renderCountryQuestions(data) {
    countryAccordionList.innerHTML = '';

    data.questions.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'faq-acc-card';

      card.innerHTML = `
        <button type="button" class="faq-acc-header" aria-expanded="false">
          <div class="faq-acc-header-left">
            <span class="faq-square-icon">${getIconSvg(item.icon)}</span>
            <span class="faq-acc-title">${item.q}</span>
          </div>
          <span class="faq-acc-chevron">${chevronSvg}</span>
        </button>
        <div class="faq-acc-body">
          <div class="faq-acc-content-box">
            <p>${item.a}</p>
          </div>
        </div>
      `;

      // Accordion click listener
      const headerBtn = card.querySelector('.faq-acc-header');
      headerBtn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        
        // Close others in same list if desired
        countryAccordionList.querySelectorAll('.faq-acc-card').forEach(c => {
          c.classList.remove('open');
          c.querySelector('.faq-acc-header')?.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          card.classList.add('open');
          headerBtn.setAttribute('aria-expanded', 'true');
        }
      });

      countryAccordionList.appendChild(card);
    });
  }

  // =========================================================================
  // 6. GENERAL ROYAL QUESTIONS ACCORDION INTERACTIVITY
  // =========================================================================
  const generalCards = document.querySelectorAll('#generalAccordionList .faq-acc-card');
  generalCards.forEach(card => {
    const headerBtn = card.querySelector('.faq-acc-header');
    if (headerBtn) {
      headerBtn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        generalCards.forEach(c => {
          c.classList.remove('open');
          c.querySelector('.faq-acc-header')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          card.classList.add('open');
          headerBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // =========================================================================
  // 7. EVENT LISTENERS & DESTINATION CARD CLICKS
  // =========================================================================
  document.querySelectorAll('[data-dest]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const destId = el.getAttribute('data-dest');
      showCountry(destId);
    });
  });

  if (btnBackCountries) {
    btnBackCountries.addEventListener('click', (e) => {
      e.preventDefault();
      showOverview();
    });
  }

  if (btnOtherDestinations) {
    btnOtherDestinations.addEventListener('click', (e) => {
      e.preventDefault();
      showOverview();
    });
  }

  // =========================================================================
  // 8. INITIAL ROUTING (Hash & Query parameters)
  // =========================================================================
  function checkUrlRoute() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryDest = urlParams.get('dest') || urlParams.get('country');
    const hashDest = window.location.hash.replace('#', '').toLowerCase();

    const targetDest = queryDest || hashDest;

    if (targetDest && destinationData[targetDest]) {
      showCountry(targetDest, false);
    } else {
      showOverview(false);
    }
  }

  // Listen to popstate (back/forward in browser)
  window.addEventListener('popstate', () => {
    checkUrlRoute();
  });

  // Initial load
  checkUrlRoute();

});
