/* ========================================
   BLACK BESSO - Premium Nail Salon
   JavaScript Functionality
   ======================================== */

const translations = {
    ar: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        gallery: 'معرض الأعمال',
        pricing: 'الأسعار',
        contact: 'اتصل بنا',
        bookNow: 'احجزي الآن',
        bookYourAppointment: 'احجزي موعدك',
        toggleLanguage: 'تغيير اللغة',
        toggleTheme: 'تغيير المظهر',
        premiumNailSalon: 'صالون أظافر فاخر',
        whereElegance: 'حيث الأناقة',
        meetsArtistry: 'تلتقي بالفن',
        heroSubtitle: 'استمتعي بالعناية الفاخرة بالأظافر وتصاميم مذهلة تعكس أسلوبك. تجربة مانيكير مثالية في انتظارك.',
        exploreServices: 'استكشفي الخدمات',
        viewOurWork: 'شاهدي أعمالنا',
        happyClients: 'عميل سعيد',
        yearsExperience: 'سنوات خبرة',
        nailDesigns: 'تصميم أظافر',
        scrollDown: 'مرري للأسفل',
        salonInterior: 'داخل الصالون',
        nailArtistry: 'فن الأظافر',
        yearsOfExcellence: 'سنوات من التميز',
        aboutUs: 'من نحن',
        yourBeautyOurPassion: 'جمالك, شغفنا',
        aboutLead: 'في بلاك بيسو، نؤمن أن كل امرأة تستحق أن تشعر بالتدليل والثقة. فريقنا من فنيي الأظافر المهرة يجمع بين الفن والدقة ليخلق تصاميم مذهلة تعكس أسلوبك الفريد.',
        aboutText: 'تأسس صالوننا بحب للجمال والاهتمام بالتفاصيل، ليصبح ملاذاً لمن يبحثن عن رعاية فاخرة للأظافر. نستخدم فقط منتجات عالية الجودة ونتبع معايير نظافة صارمة لضمان سلامتكم ورضاكم.',
        premiumProducts: 'منتجات فاخرة',
        premiumProductsDesc: 'أفضل الماركات الصديقة للبيئة فقط',
        certifiedExperts: 'خبراء معتمدون',
        certifiedExpertsDesc: 'فنيون مرخصون ومحترفون',
        sterileEnvironment: 'بيئة معقمة',
        sterileEnvironmentDesc: 'تعقيم بمستوى المستشفيات',
        ourServices: 'خدماتنا',
        luxuryNailTreatments: 'علاجات أظافر فاخرة',
        servicesDesc: 'اكتشفي مجموعتنا من خدمات الأظافر المتميزة المصممة لتجعلك تبدين وتشعرين بالجمال.',
        classicManicure: 'مانيكير كلاسيكي',
        classicManicureDesc: 'تشكيل الأظافر، العناية بالبشرة، تدليك اليدين، ووضع الطلاء لأظافر مثالية.',
        nailShaping: 'تشكيل وتبريد الأظافر',
        cuticleTreatment: 'علاج البشرة',
        handMassage: 'تدليك اليدين',
        polishApplication: 'وضع الطلاء',
        mostPopular: 'الأكثر طلباً',
        spaPedicure: 'باديكير سبا',
        spaPedicureDesc: 'تدليل القدمين كاملاً مع تقشير، قناع، تدليك، وطلاء جميل.',
        warmWaterSoak: 'نقع في ماء دافئ',
        exfoliationScrub: 'فرك مقشر',
        moisturizingMask: 'قناع مرطب',
        legMassage: 'تدليك الساقين',
        startingFrom: 'تبدأ من',
        acrylicNails: 'أظافر أكريليك',
        acrylicNailsDesc: 'أظافر اصطناعية طويلة الأمد ومتينة مشكّلة بإتقان بأي شكل.',
        fullSetOverlays: 'مجموعة كاملة وتراكبات',
        customShapes: 'أشكال مخصصة',
        pinkWhiteOptions: 'خيارات وردي وأبيض',
        fillRepair: 'تعبئة وإصلاح',
        gelNails: 'أظافر جل',
        gelNailsDesc: 'طلاء جل لامع مقاوم للتشقق يدوم حتى 3 أسابيع مع العناية المناسبة.',
        gelPolishApplication: 'تطبيق طلاء الجل',
        builderGelStrength: 'قوة الجل البنائي',
        noChipGuarantee: 'ضمان ضد التشقق',
        uvLedCured: 'معالجة بالأشعة فوق البنفسجية',
        nailArt: 'فن الأظافر',
        nailArtDesc: 'عبّري عن نفسك بتصاميم مخصصة وفن مرسوم يدوياً وكرستال وأكثر.',
        handPaintedDesigns: 'تصاميم مرسومة يدوياً',
        rhinestonesGems: 'أحجار الراين والجواهر',
        foilGlitter: 'رقائق وبريق',
        customRequests: 'طلبات مخصصة',
        beautyTreatments: 'علاجات التجميل',
        beautyTreatmentsDesc: 'خدمات تجميل كاملة تشمل إزالة الشعر بالشمع والخيط وعلاجات البارافين.',
        paraffinWaxDip: 'غمس شمع البارافين',
        eyebrowShaping: 'تشكيل الحواجب',
        lipChinWax: 'شمع الشفاه والذقن',
        hotStoneMassage: 'تدليك بالأحجار الساخنة',
        ourWork: 'أعمالنا',
        nailArtGallery: 'معرض فن الأظافر',
        galleryDesc: 'تصفحي مجموعتنا المذهلة من تصاميم الأظافر واستوحي الإلهام.',
        all: 'الكل',
        classic: 'كلاسيكي',
        acrylic: 'أكريليك',
        gel: 'جل',
        nailArtShort: 'فن الأظافر',
        roseQuartzSet: 'مجموعة روز كوارتز',
        classicGelManicure: 'مانيكير جل كلاسيكي',
        frenchOmbre: 'فرنسي أومبري',
        handPaintedGradient: 'تدرج مرسوم يدوياً',
        stilettoNails: 'أظافر ستايلتو',
        stilettoGlam: 'جلام ستايلتو',
        acrylicExtensions: 'امتدادات أكريليك',
        floralDesign: 'تصميم زهري',
        springBlossom: 'زهرة الربيع',
        gelWithNailArt: 'جل مع فن الأظافر',
        nudeCollection: 'مجموعة نيود',
        nudeElegance: 'أناقة نيود',
        classicManicureShort: 'مانيكير كلاسيكي',
        crystalAccents: 'لمسات كريستال',
        crystalLuxe: 'فخامة كريستال',
        artWithRhinestones: 'فن مع أحجار الراين',
        ombreFrench: 'فرنسي أومبري',
        acrylicFullSetShort: 'مجموعة أكريليك كاملة',
        chromeNails: 'أظافر كروم',
        mirrorChrome: 'كروم مرآة',
        chromeGelFinish: 'لمسة جل كروم النهائية',
        ourPriceList: 'قائمة الأسعار',
        pricingDesc: 'أسعار شفافة لجميع خدماتنا المتميزة. لا رسوم خفية.',
        manicureServices: 'خدمات المانيكير',
        gelManicure: 'مانيكير جل',
        spaManicure: 'مانيكير سبا',
        paraffinTreatment: 'علاج البارافين',
        polishChangeOnly: 'تغيير الطلاء فقط',
        bestValue: 'أفضل قيمة',
        pedicureServices: 'خدمات الباديكير',
        classicPedicure: 'باديكير كلاسيكي',
        gelPedicure: 'باديكير جل',
        deluxePedicure: 'باديكير ديلوكس',
        callusTreatment: 'علاج الجلد المتصلب',
        enhancements: 'التحسينات',
        acrylicFullSet: 'مجموعة أكريليك كاملة',
        acrylicFill: 'تعبئة أكريليك',
        dipPowder: 'بودرة ديب',
        gelExtensions: 'امتدادات جل',
        nailArtPerNail: 'فن الأظافر (للظفر)',
        pricingNote: 'قد تختلف الأسعار حسب طول الظفر وتعقيد التصميم والطلبات الإضافية. يرجى استشارة فنيينا للحصول على أسعار دقيقة.',
        testimonials: 'آراء العملاء',
        whatOurClientsSay: 'ماذا يقول عملاؤنا',
        regularClient: 'عميلة دائمة',
        nailArtEnthusiast: 'عاشقة لفن الأظافر',
        spaPedicureLover: 'محبة للباديكير',
        testimonial1: '"بلاك بيسو غيرت لعبة أظافري تماماً! الاهتمام بالتفاصيل مذهل والأجواء مريحة جداً. لن أذهب لأي مكان آخر!"',
        testimonial2: '"فنيات الأظافر هنا محترفات حقيقيات. أحضرن أفكاري من بينترست للحياة بشكل مثالي! مانيكير الجل استمر أكثر من 3 أسابيع."',
        testimonial3: '"أفضل تجربة باديكير على الإطلاق! علاج السبا كان مثالياً وقدمي لم تكونا بهذه النعومة أبداً. الموظفات ودودات ومحترفات."',
        getInTouch: 'تواصلي معنا',
        contactDesc: 'جاهزة لأظافر مثالية؟ تواصلي معنا أو احجزي عبر الإنترنت.',
        yourName: 'اسمك',
        phoneNumber: 'رقم الهاتف',
        emailAddress: 'البريد الإلكتروني',
        preferredDate: 'التاريخ المفضل',
        selectService: 'اختيار الخدمة',
        chooseService: 'اختاري خدمة',
        preferredTime: 'الوقت المفضل',
        chooseTimeSlot: 'اختاري موعداً',
        specialRequests: 'طلبات خاصة',
        bookAppointment: 'احجزي موعداً',
        bookingRequestSent: 'تم إرسال طلب الحجز!',
        bookingConfirmMsg: 'سنؤكد موعدك خلال 24 ساعة. شكراً لاختيارك بلاك بيسو!',
        visitUs: 'زورينا',
        address: '123 بيوتي لين، جناح 100<br>بيفرلي هيلز، كاليفورنيا 90210',
        callUs: 'اتصلي بنا',
        emailUs: 'راسلينا',
        businessHours: 'ساعات العمل',
        mondayFriday: 'الاثنين - الجمعة',
        saturday: 'السبت',
        sunday: 'الأحد',
        interactiveMap: 'خريطة تفاعلية',
        footerDesc: 'حيث تلتقي الأناقة بالفن. رعاية أظافر فاخرة وعلاجات تجميل للمرأة العصرية.',
        quickLinks: 'روابط سريعة',
        servicesFooter: 'الخدمات',
        manicure: 'مانيكير',
        pedicure: 'باديكير',
        acrylicNailsFooter: 'أظافر أكريليك',
        gelNailsFooter: 'أظافر جل',
        nailArtFooter: 'فن الأظافر',
        beautyTreatmentsFooter: 'علاجات التجميل',
        stayUpdated: 'ابق على اطلاع',
        newsletterDesc: 'اشتركي للحصول على عروض حصرية واتجاهات الأظافر ونصائح الجمال.',
        copyright: '© 2025 صالون بلاك بيسو للأظافر. جميع الحقوق محفوظة.',
        privacyPolicy: 'سياسة الخصوصية',
        termsOfService: 'شروط الخدمة',
        nailArtPreview: 'معاينة فن الأظافر',
        optClassicManicure: 'مانيكير كلاسيكي - $25',
        optGelManicure: 'مانيكير جل - $40',
        optSpaManicure: 'مانيكير سبا - $35',
        optClassicPedicure: 'باديكير كلاسيكي - $35',
        optSpaPedicure: 'باديكير سبا - $50',
        optGelPedicure: 'باديكير جل - $55',
        optAcrylicFull: 'مجموعة أكريليك كاملة - $55',
        optAcrylicFill: 'تعبئة أكريليك - $35',
        optDipPowder: 'بودرة ديب - $45',
        optGelExtensions: 'امتدادات جل - $60',
        optNailArt: 'استشارة فن الأظافر',
        optOther: 'خدمات أخرى'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ========================================
    // LANGUAGE SWITCHER (EN / AR)
    // ========================================
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    const mobileLangToggle = document.getElementById('mobileLangToggle');
    const langText = document.getElementById('langText');
    const mobileLangText = document.getElementById('mobileLangText');
    
    // Get saved language preference or default to Arabic
    let currentLang = localStorage.getItem('lang') || 'ar';
    
    function applyLanguage(lang) {
        currentLang = lang;
        
        // Set html lang attribute
        html.setAttribute('lang', lang);
        
        // Update toggle button text (show the OTHER language)
        const toggleLabel = lang === 'ar' ? 'EN' : 'عربي';
        if (langText) langText.textContent = toggleLabel;
        if (mobileLangText) mobileLangText.textContent = toggleLabel;
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            if (lang === 'ar' && translations.ar[key]) {
                el.innerHTML = translations.ar[key];
            } else {
                el.innerHTML = el.getAttribute('data-translate-original') || el.dataset.translate;
            }
        });
        
        // Handle placeholders
        document.querySelectorAll('[data-placeholder-en], [data-placeholder-ar]').forEach(el => {
            if (lang === 'ar') {
                el.setAttribute('placeholder', el.getAttribute('data-placeholder-ar'));
            } else {
                el.setAttribute('placeholder', el.getAttribute('data-placeholder-en'));
            }
        });
        
        // Store original HTML on first run
        document.querySelectorAll('[data-translate]').forEach(el => {
            if (!el.getAttribute('data-translate-original')) {
                el.setAttribute('data-translate-original', el.innerHTML);
            }
        });
        
        // Save preference
        localStorage.setItem('lang', lang);
        
        // Re-render icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    // Store original HTML before first language application
    document.querySelectorAll('[data-translate]').forEach(el => {
        if (!el.getAttribute('data-translate-original')) {
            el.setAttribute('data-translate-original', el.innerHTML);
        }
    });
    
    // Apply saved language
    applyLanguage(currentLang);
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
        });
    }
    
    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', () => {
            applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
        });
    }

    // ========================================
    // PRELOADER
    // ========================================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
            
            // Trigger hero animations after preloader
            setTimeout(() => {
                initAnimations();
            }, 100);
        }, 350);
    });

    // Fallback - hide preloader after 1 second regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }, 1000);

    // ========================================
    // NAVIGATION
    // ========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Scroll effect for navbar
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    function initAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, parseInt(delay));
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 700;
            const start = 0;
            const increment = target / (duration / 16);
            
            let current = start;
            
            const updateCounter = () => {
                current += increment;
                
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            
            // Start animation when element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    animateCounters();

    // ========================================
    // GALLERY FILTER
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========================================
    // LIGHTBOX
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxBtns = document.querySelectorAll('.gallery-btn');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    lightboxBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // ========================================
    // FORM HANDLING
    // ========================================
    const bookingForm = document.getElementById('bookingForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                bookingForm.style.display = 'none';
                formSuccess.classList.add('show');
                
                // Re-initialize icons in success message
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 600);
        });
        
        // Form input animations
        const formInputs = bookingForm.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }

    // ========================================
    // NEWSLETTER FORM
    // ========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const input = newsletterForm.querySelector('input');
            const email = input.value;
            
            if (email) {
                // Show success feedback
                input.value = '';
                input.placeholder = 'Thank you for subscribing!';
                
                setTimeout(() => {
                    input.placeholder = 'Your email address';
                }, 3000);
            }
        });
    }

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // PARALLAX EFFECT (SUBTLE)
    // ========================================
    const heroShapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        heroShapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ========================================
    // CURSOR EFFECT (DESKTOP ONLY)
    // ========================================
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
        document.body.appendChild(cursor);
        
        // Add cursor styles
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
            }
            .cursor-dot {
                width: 8px;
                height: 8px;
                background: var(--primary, #E8708A);
                border-radius: 50%;
                position: absolute;
                top: -4px;
                left: -4px;
                transition: transform 0.1s ease;
            }
            .cursor-ring {
                width: 40px;
                height: 40px;
                border: 2px solid var(--primary, #E8708A);
                border-radius: 50%;
                position: absolute;
                top: -20px;
                left: -20px;
                transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease;
                opacity: 0.5;
            }
            .custom-cursor.hovering .cursor-ring {
                width: 60px;
                height: 60px;
                top: -30px;
                left: -30px;
                opacity: 0.8;
            }
            .custom-cursor.hovering .cursor-dot {
                transform: scale(1.5);
            }
            @media (max-width: 768px) {
                .custom-cursor {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Add hover effect to interactive elements
        const hoverElements = document.querySelectorAll('a, button, .gallery-item, .service-card, .filter-btn');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    }

    // ========================================
    // SERVICE CARD HOVER EFFECT
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 768) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========================================
    // SCROLL PROGRESS INDICATOR
    // ========================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    // Add progress bar styles
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            z-index: 9999;
            background: rgba(232, 112, 138, 0.2);
        }
        .progress-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #FFB6C1, #E8708A, #C8A2C8);
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(progressStyle);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.querySelector('.progress-bar').style.width = `${scrollPercent}%`;
    });

    // ========================================
    // TYPING EFFECT FOR HERO BADGE
    // ========================================
    const heroBadgeText = document.querySelector('[data-translate="premiumNailSalon"]');
    
    if (heroBadgeText) {
        // Store the current text (already translated) and type it character by character
        const textToType = heroBadgeText.textContent;
        heroBadgeText.textContent = '';
        
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < textToType.length) {
                heroBadgeText.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 20);
            }
        }
        
        // Start typing quickly after preloader
        setTimeout(typeText, 450);
    }

    // ========================================
    // SMOOTH REVEAL FOR PRICING CARDS
    // ========================================
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 60));
    });

    // ========================================
    // DARK MODE TOGGLE
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        html.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    }
    
    function toggleTheme() {
        html.classList.toggle('dark-mode');
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        const currentTheme = html.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        // Re-initialize icons for theme change
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }

    // ========================================
    // KEYBOARD ACCESSIBILITY
    // ========================================
    document.addEventListener('keydown', (e) => {
        // Close lightbox on Escape
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
        
        // Close mobile menu on Escape
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // ========================================
    // DATE INPUT MIN DATE
    // ========================================
    const dateInput = document.getElementById('date');
    
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }

    // ========================================
    // PERFORMANCE: LAZY LOAD IMAGES
    // ========================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('.gallery-img, .about-img-main, .about-img-secondary');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    imageObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // SMOOTH HOVER EFFECTS FOR SOCIAL LINKS
    // ========================================
    const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========================================
    // TESTIMONIALS AUTO-SCROLL (OPTIONAL)
    // ========================================
    let testimonialIndex = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    function autoScrollTestimonials() {
        if (window.innerWidth <= 768) return; // Skip on mobile
        
        testimonialCards.forEach(card => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        });
        
        testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    }
    
    // Auto-scroll every 5 seconds (optional - uncomment to enable)
    // setInterval(autoScrollTestimonials, 5000);

    // ========================================
    // FORM VALIDATION ENHANCEMENT
    // ========================================
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        
        if (input) {
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    group.classList.add('has-value');
                } else {
                    group.classList.remove('has-value');
                }
            });
            
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    group.classList.add('has-value');
                } else {
                    group.classList.remove('has-value');
                }
            });
        }
    });

    // ========================================
    // REFRESH LUCIDE ICONS AFTER DYNAMIC CONTENT
    // ========================================
    function refreshIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    // Observe DOM changes
    const observer = new MutationObserver(() => {
        setTimeout(refreshIcons, 100);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('💅 Black Besso - All systems initialized!');
});
