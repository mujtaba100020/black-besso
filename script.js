/* ========================================
   BLACK BESSO - Premium Nail Salon
   JavaScript Functionality
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
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
            }, 300);
        }, 1500);
    });

    // Fallback - hide preloader after 3 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }, 3000);

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
            const duration = 2000;
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
            }, 1500);
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
    const heroBadge = document.querySelector('.hero-badge');
    
    if (heroBadge) {
        const text = heroBadge.textContent;
        heroBadge.textContent = '';
        
        let charIndex = 0;
        
        function typeText() {
            if (charIndex < text.length) {
                heroBadge.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50);
            }
        }
        
        // Start typing after preloader
        setTimeout(typeText, 2000);
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
        }, 300 + (index * 150));
    });

    // ========================================
    // DARK MODE TOGGLE
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const html = document.documentElement;
    
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
