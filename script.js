/**
 * UET Mardan - Engineering University Website
 * Enhanced JavaScript with Advanced Animations and Interactive Features
 * Author: AI Assistant
 * Version: 2.0.0
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('UET Mardan Website - Enhanced JavaScript Loaded Successfully');
    
    // Initialize all website functionality
    initWebsite();
});

/**
 * Main initialization function
 * Sets up all website features and event listeners
 */
function initWebsite() {
    // Mark page context (home vs. inner pages)
    setPageContext();
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize hero animations
    initHeroAnimations();
    
    // Initialize enhanced scroll animations
    initEnhancedScrollAnimations();
    
    // Initialize statistics counter
    initStatisticsCounter();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize form handling
    initFormHandling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize particle effects
    initParticleEffects();
    
    // Initialize 3D building animation
    init3DBuilding();
    
    // Initialize new enhanced features
    initVirtualTour();
    initTechnologiesDemo();
    initImageOptimization();
    initEnhancedFormHandling();
    initPerformanceMonitoring();
    initEnhancedAccessibility();
    initSectionHighlights();
    initParallaxEffects();
    initInteractiveElements();
    
    // Initialize departments
    initDepartments();
    
    // Initialize slider and navbar features
    initDepartmentSlider();
    // Load departments from admin-controlled API for homepage slider if available
    (function(){
        const api = getApiBase() + 'departments';
        fetch(api).then(r => r.json()).then(json => {
            if (!json.success || !Array.isArray(json.data)) return;
            const track = document.getElementById('sliderTrack');
            const dots = document.getElementById('sliderDots');
            if (!track || !dots) return;
            // Rebuild slides dynamically
            track.innerHTML = '';
            json.data.forEach((d, idx) => {
                const slide = document.createElement('div');
                slide.className = 'slide' + (idx === 0 ? ' active' : '');
                slide.innerHTML = `
                    <img src="${d.image || ''}" alt="${d.name || ''}">
                    <div class="slide-content">
                        <h2>${d.name || ''}</h2>
                        <p>${d.description || ''}</p>
                        <a href="departments/${(d.id || d.slug || '').toString()}.html" class="btn btn-primary">Learn More</a>
                    </div>`;
                track.appendChild(slide);
            });
            // Re-init dots
            dots.innerHTML = '';
        }).catch(()=>{});
    })();
    initQuickActions();
    
    // Ensure main content is visible
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
        mainContent.style.visibility = 'visible';
    }
}

/**
 * Enhanced Section Highlights and Animations
 * Creates visual differentiation between sections
 */
function initSectionHighlights() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Add animation class
                section.classList.add('section-animate', 'animate-in');
                
                // Add section-specific highlights
                highlightSection(section);
                
                // Update navigation
                updateActiveNavigation();
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Highlight specific sections with unique effects
 */
function highlightSection(section) {
    const sectionId = section.id || section.className;
    
    // Add section-specific animations
    switch(sectionId) {
        case 'hero-section':
            animateHeroSection(section);
            break;
        case 'about-section':
            animateAboutSection(section);
            break;
        case 'programs-section':
            animateProgramsSection(section);
            break;
        case 'facilities-section':
            animateFacilitiesSection(section);
            break;
        case 'virtual-tour-section':
            animateVirtualTourSection(section);
            break;
        case 'research-section':
            animateResearchSection(section);
            break;
        case 'admissions-section':
            animateAdmissionsSection(section);
            break;
        case 'technologies-section':
            animateTechnologiesSection(section);
            break;
        case 'contact-section':
            animateContactSection(section);
            break;
        default:
            // Default animation for other sections
            animateDefaultSection(section);
    }
}

/**
 * Section-specific animations
 */
function animateHeroSection(section) {
    const elements = section.querySelectorAll('.hero-title, .hero-subtitle, .hero-stats, .hero-buttons');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add floating animation to hero elements
    addFloatingAnimation(section.querySelector('.hero-visual'));
}

function animateAboutSection(section) {
    const cards = section.querySelectorAll('.feature-item');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 150);
    });
}

function animateProgramsSection(section) {
    const departments = section.querySelectorAll('.department-card');
    departments.forEach((dept, index) => {
        setTimeout(() => {
            dept.style.opacity = '1';
            dept.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });
}

function animateFacilitiesSection(section) {
    const facilities = section.querySelectorAll('.facility-item');
    facilities.forEach((facility, index) => {
        setTimeout(() => {
            facility.style.opacity = '1';
            facility.style.transform = 'translateY(0)';
        }, index * 250);
    });
}

function animateVirtualTourSection(section) {
    const tourElements = section.querySelectorAll('.tour-tab, .tour-scene');
    tourElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateResearchSection(section) {
    const researchCards = section.querySelectorAll('.research-card');
    researchCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateY(0deg)';
        }, index * 300);
    });
}

function animateAdmissionsSection(section) {
    const steps = section.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

function animateTechnologiesSection(section) {
    const techItems = section.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
        }, index * 150);
    });
}

function animateContactSection(section) {
    const contactItems = section.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function animateDefaultSection(section) {
    const elements = section.querySelectorAll('.section-header, .card, .item');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/**
 * Add floating animation to elements
 */
function addFloatingAnimation(element) {
    if (!element) return;
    
    element.style.animation = 'floating 3s ease-in-out infinite';
}

/**
 * Enhanced Scroll Animations
 * Improved scroll-based animations with better performance
 */
function initEnhancedScrollAnimations() {
    // Initialize scroll-triggered animations
    initScrollTriggeredAnimations();
    
    // Initialize parallax effects
    initParallaxEffects();
    
    // Initialize counter animations
    initCounterAnimations();
    
    // Initialize card reveal animations
    initCardRevealAnimations();
    
    // Initialize admissions page specific animations
    initAdmissionsAnimations();
}

/**
 * Initialize admissions page specific animations
 */
function initAdmissionsAnimations() {
    const stepCards = document.querySelectorAll('.step-card');
    const requirementCards = document.querySelectorAll('.requirement-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add staggered animation for step cards
                if (entry.target.classList.contains('step-card')) {
                    const index = Array.from(stepCards).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.animationDelay = `${index * 0.2}s`;
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    stepCards.forEach(card => observer.observe(card));
    requirementCards.forEach(card => observer.observe(card));
}

/**
 * Initialize events page specific animations
 */
function initEventsAnimations() {
    const categoryCards = document.querySelectorAll('.category-card');
    const eventCards = document.querySelectorAll('.event-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add staggered animation for category cards
                if (entry.target.classList.contains('category-card')) {
                    const index = Array.from(categoryCards).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    categoryCards.forEach(card => observer.observe(card));
    eventCards.forEach(card => observer.observe(card));
    
    // Add category filtering functionality
    initCategoryFiltering();
}

/**
 * Initialize category filtering
 */
function initCategoryFiltering() {
    const categoryCards = document.querySelectorAll('.category-card[data-category]');
    const eventCards = document.querySelectorAll('.event-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            // Update active category
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Filter events
            eventCards.forEach(eventCard => {
                if (category === 'all' || eventCard.dataset.category === category) {
                    eventCard.style.display = 'block';
                    eventCard.classList.add('animate-on-scroll');
                } else {
                    eventCard.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initialize scroll-triggered animations
 */
function initScrollTriggeredAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add specific animation based on data attribute
                const animationType = entry.target.dataset.animation;
                if (animationType) {
                    entry.target.classList.add(`animate-${animationType}`);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
}

/**
 * Initialize parallax effects
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/**
 * Initialize counter animations
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Initialize card reveal animations
 */
function initCardRevealAnimations() {
    const cards = document.querySelectorAll('.card, .department-card, .event-card, .news-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-revealed');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        cardObserver.observe(card);
    });
}

/**
 * Interactive Elements Enhancement
 */
function initInteractiveElements() {
    // Enhanced hover effects
    initEnhancedHoverEffects();
    
    // Interactive forms
    initInteractiveForms();
    
    // Smooth transitions
    initSmoothTransitions();
    
    // Loading states
    initLoadingStates();
}

/**
 * Enhanced hover effects
 */
function initEnhancedHoverEffects() {
    const interactiveElements = document.querySelectorAll('.btn, .card, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            element.style.transform = 'translateY(-5px) scale(1.02)';
            element.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
        });
        
        element.addEventListener('mouseleave', (e) => {
            element.style.transform = 'translateY(0) scale(1)';
            element.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
    });
}

/**
 * Interactive forms
 */
function initInteractiveForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Add floating label effect
            if (input.type !== 'submit' && input.type !== 'reset') {
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        input.parentElement.classList.remove('focused');
                    }
                });
            }
            
            // Add real-time validation
            input.addEventListener('input', () => {
                validateField(input);
            });
        });
    });
}

/**
 * Field validation
 */
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    let isValid = true;
    let errorMessage = '';
    
    // Email validation
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Update field status
    updateFieldStatus(field, isValid, errorMessage);
}

/**
 * Update field validation status
 */
function updateFieldStatus(field, isValid, errorMessage) {
    const fieldContainer = field.parentElement;
    
    // Remove existing status classes
    fieldContainer.classList.remove('valid', 'invalid');
    
    // Remove existing error message
    const existingError = fieldContainer.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    if (isValid) {
        fieldContainer.classList.add('valid');
        field.style.borderColor = 'var(--accent-color)';
    } else if (errorMessage) {
        fieldContainer.classList.add('invalid');
        field.style.borderColor = '#ef4444';
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        errorElement.style.color = '#ef4444';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        fieldContainer.appendChild(errorElement);
    }
}

/**
 * Smooth transitions
 */
function initSmoothTransitions() {
    // Add smooth transitions to all interactive elements
    const transitionElements = document.querySelectorAll('a, button, .card, .btn');
    
    transitionElements.forEach(element => {
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

/**
 * Loading states
 */
function initLoadingStates() {
    const buttons = document.querySelectorAll('.btn[type="submit"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.form && button.form.checkValidity()) {
                button.disabled = true;
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Simulate form submission
                setTimeout(() => {
                    button.disabled = false;
                    button.innerHTML = button.dataset.originalText || 'Submit';
                    showSuccessMessage('Form submitted successfully!');
                }, 2000);
            }
        });
        
        // Store original text
        button.dataset.originalText = button.textContent;
    });
}

/**
 * Show success message
 */
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    // Animate in
    setTimeout(() => {
        successDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        successDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            successDiv.remove();
        }, 300);
    }, 3000);
}

/**
 * Initialize Department Slider
 */
function initDepartmentSlider() {
    const sliderTrack = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const dots = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const deptLinks = document.querySelectorAll('.dept-link');
    
    if (!sliderTrack || !slides.length) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });
    
    // Navigation functions
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    function updateSlider() {
        // Update slider position
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active slide
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        // Update dots
        const dotElements = dots.querySelectorAll('.dot');
        dotElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update department links
        deptLinks.forEach((link, index) => {
            link.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Department link navigation
    deptLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
        });
    });
    
    // Auto-play slider
    setInterval(nextSlide, 5000);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

/**
 * Initialize Event Calendar
 */
function initEventCalendar() {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthEl = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    
    if (!calendarDays) return;
    
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // Sample events data
    const events = {
        '2024-03-25': { title: 'AI & Machine Learning Workshop', time: '10:00 AM', location: 'AI Lab, Building A' },
        '2024-03-28': { title: 'Sustainable Construction Seminar', time: '2:00 PM', location: 'Auditorium' },
        '2024-03-30': { title: 'Student Project Exhibition', time: '11:00 AM', location: 'Main Hall' },
        '2024-04-15': { title: 'Career Fair 2024', time: '10:00 AM', location: 'Main Auditorium' },
        '2024-04-20': { title: 'Engineering Competition', time: '9:00 AM', location: 'Engineering Lab' }
    };
    
    function renderCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        
        currentMonthEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        
        calendarDays.innerHTML = '';
        
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            dayEl.textContent = date.getDate();
            
            const dateString = date.toISOString().split('T')[0];
            const isToday = date.toDateString() === new Date().toDateString();
            const isCurrentMonth = date.getMonth() === currentMonth;
            const hasEvent = events[dateString];
            
            if (!isCurrentMonth) {
                dayEl.classList.add('other-month');
            }
            
            if (isToday) {
                dayEl.classList.add('today');
            }
            
            if (hasEvent) {
                dayEl.classList.add('has-event');
                dayEl.title = `${hasEvent.title} - ${hasEvent.time}`;
            }
            
            dayEl.addEventListener('click', () => {
                if (hasEvent) {
                    showEventDetails(hasEvent, dateString);
                }
            });
            
            calendarDays.appendChild(dayEl);
        }
        
        updateMonthlyEvents();
    }
    
    function updateMonthlyEvents() {
        const monthlyEventsEl = document.querySelector('.monthly-events-list');
        if (!monthlyEventsEl) return;
        
        monthlyEventsEl.innerHTML = '';
        
        Object.keys(events).forEach(dateString => {
            const [year, month, day] = dateString.split('-');
            if (parseInt(month) === currentMonth + 1 && parseInt(year) === currentYear) {
                const event = events[dateString];
                const eventEl = document.createElement('div');
                eventEl.className = 'monthly-event';
                eventEl.innerHTML = `
                    <span class="event-day">${day}</span>
                    <div class="event-info">
                        <h4>${event.title}</h4>
                        <p>${event.time} - ${event.location}</p>
                    </div>
                `;
                monthlyEventsEl.appendChild(eventEl);
            }
        });
    }
    
    function showEventDetails(event, dateString) {
        const modal = document.createElement('div');
        modal.className = 'event-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Event Details</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <h3>${event.title}</h3>
                    <p><strong>Date:</strong> ${new Date(dateString).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> ${event.time}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <div class="event-actions">
                        <button class="btn-register" onclick="registerForEvent('${event.title}')">
                            <i class="fas fa-user-plus"></i>
                            Register Now
                        </button>
                        <button class="btn btn-secondary" onclick="addToCalendar('${event.title}', '${dateString}', '${event.time}')">
                            <i class="fas fa-calendar-plus"></i>
                            Add to Calendar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close-modal')) {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            }
        });
    }
    
    if (prevMonthBtn) prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });
    
    if (nextMonthBtn) nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });
    
    renderCalendar();
}

/**
 * Initialize Register Buttons
 */
function initRegisterButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-register') || e.target.closest('.btn-register')) {
            const btn = e.target.classList.contains('btn-register') ? e.target : e.target.closest('.btn-register');
            const eventTitle = btn.getAttribute('data-event') || 'Event';
            registerForEvent(eventTitle, btn);
        }
    });
}

/**
 * Register for Event Function
 */
function registerForEvent(eventTitle, button = null) {
    if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';
        button.disabled = true;
        
        // Simulate registration process
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i> Registered!';
            button.classList.add('success');
            button.disabled = false;
            
            showNotification(`Successfully registered for ${eventTitle}!`);
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('success');
            }, 3000);
        }, 2000);
    } else {
        showNotification(`Successfully registered for ${eventTitle}!`);
    }
}

/**
 * Add Event to Calendar
 */
function addToCalendar(eventTitle, date, time) {
    const event = {
        title: eventTitle,
        start: new Date(date + 'T' + time),
        end: new Date(date + 'T' + time),
        description: `UET Mardan Event: ${eventTitle}`
    };
    
    // Create calendar event URL
    const calendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${document.URL}
DTSTART:${event.start.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
DTEND:${event.end.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
END:VEVENT
END:VCALENDAR`;
    
    const link = document.createElement('a');
    link.href = calendarUrl;
    link.download = `${eventTitle.replace(/\s+/g, '_')}.ics`;
    link.click();
    
    showNotification(`Event "${eventTitle}" added to your calendar!`);
}

/**
 * Initialize Quick Actions
 */
function initQuickActions() {
    const moreBtn = document.getElementById('moreActionsBtn');
    const moreDropdown = document.getElementById('moreDropdown');
    const actionBtns = document.querySelectorAll('.action-btn, .dropdown-item');
    
    // Toggle more dropdown
    if (moreBtn && moreDropdown) {
        moreBtn.addEventListener('click', () => {
            moreDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!moreBtn.contains(e.target) && !moreDropdown.contains(e.target)) {
                moreDropdown.classList.remove('show');
            }
        });
    }
    
    // Handle action button clicks (for backend integration)
    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const action = btn.dataset.action;
            handleActionClick(action);
        });
    });
}

/**
 * Handle action button clicks
 */
function handleActionClick(action) {
    const baseApi = getApiBase();
    
    async function openList(endpoint, title) {
        try {
            const res = await fetch(baseApi + endpoint);
            const json = await res.json();
            if (!json.success) throw new Error(json.error || 'Failed');
            const items = json.data || [];
            const html = items.map(i => `• ${i.title || i.name || i.id}`).join('\n');
            showNotification(`${title}:\n${html || 'No items found'}`);
        } catch (e) {
            showNotification(`${title}: ${e.message}`);
        }
    }

    switch(action) {
        case 'downloads':
            openList('downloads', 'Downloads');
            break;
        case 'scholarships':
            openList('scholarships', 'Scholarships');
            break;
        case 'library':
            window.open('library.html', '_self');
            break;
        case 'portal':
            window.open('student-portal.html', '_self');
            break;
        default:
            showNotification('Feature coming soon');
    }
}

/**
 * Show notification
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== Rich Content Rendering (Admin-controlled pages) =====
function getApiBase() {
    const meta = document.querySelector('meta[name="api-base"]');
    if (meta && meta.content) {
        return meta.content.endsWith('/') ? meta.content : meta.content + '/';
    }
    if (window.__API_BASE__) {
        return window.__API_BASE__.endsWith('/') ? window.__API_BASE__ : window.__API_BASE__ + '/';
    }
    const { origin, pathname } = window.location;
    const parts = pathname.split('/').filter(Boolean);
    const root = parts.length ? `/${parts[0]}` : '';
    return `${origin}${root}/uet-php/php-backend/public/api/`;
}

function initRevealAnimations(root = document) {
    const elements = root.querySelectorAll('.reveal');
    if (!elements.length) return;
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('reveal-in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    elements.forEach(el => observer.observe(el));
}

function renderContentPage(key, containerId, options = {}) {
    const api = getApiBase();
    fetch(`${api}content/get?key=${encodeURIComponent(key)}`)
        .then(r => r.json())
        .then(resp => {
            const data = resp.data || {};
            const container = document.getElementById(containerId);
            if (!container) return;

            const title = data.title || options.fallbackTitle || '';
            const subtitle = data.subtitle || '';
            const body = data.body || '';
            const images = Array.isArray(data.images) ? data.images : [];
            const sections = Array.isArray(data.sections) ? data.sections : [];
            const cards = Array.isArray(data.cards) ? data.cards : [];

            const heroHtml = (data.heroImage || title || subtitle) ? `
                <section class="page-hero reveal" style="${data.heroImage ? `--hero:url('${data.heroImage}')` : ''}">
                    ${title ? `<h2>${title}</h2>` : ''}
                    ${subtitle ? `<p>${subtitle}</p>` : ''}
                </section>` : '';

            const bodyHtml = body ? `<section class="content-section reveal"><p>${body}</p></section>` : '';

            const galleryHtml = images.length ? `
                <section class="content-section reveal">
                    <div class="image-grid">
                        ${images.map(src => `
                            <figure class="image-tile">
                                <img src="${src}" alt="" loading="lazy" />
                            </figure>`).join('')}
                    </div>
                </section>` : '';

            const sectionsHtml = sections.map(s => `
                <section class="content-section two-col reveal">
                    <div class="text">
                        ${s.title ? `<h3>${s.title}</h3>` : ''}
                        ${s.text ? `<p>${s.text}</p>` : ''}
                        ${Array.isArray(s.items) && s.items.length ? `<ul class="list">${s.items.map(i=>`<li>${i}</li>`).join('')}</ul>` : ''}
                    </div>
                    ${s.image ? `<div class="visual"><img src="${s.image}" alt="" loading="lazy" /></div>` : ''}
                </section>`).join('');

            const cardsHtml = cards.length ? `
                <section class="content-section reveal">
                    <div class="cards-grid">
                        ${cards.map(c => `
                            <div class="content-card">
                                ${c.image ? `<div class="card-media"><img src="${c.image}" alt="" loading="lazy" /></div>` : ''}
                                <div class="card-body">
                                    ${c.title ? `<h4>${c.title}</h4>` : ''}
                                    ${c.text ? `<p>${c.text}</p>` : ''}
                                    ${c.link ? `<a class="btn btn-sm" href="${c.link}" target="_blank">Learn More</a>` : ''}
                                </div>
                            </div>`).join('')}
                    </div>
                </section>` : '';

            container.innerHTML = heroHtml + bodyHtml + sectionsHtml + cardsHtml + galleryHtml;
            initRevealAnimations(container);
        })
        .catch(() => {});
}

/**
 * Loading Screen Management
 * Handles the initial loading animation and transition
 */
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.getElementById('loadingProgress');
    
    if (!loadingScreen) return;
    
    // Animate progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 2;
        if (loadingProgress) {
            loadingProgress.style.width = progress + '%';
        }
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 40); // 40ms * 50 steps = 2000ms total
    
    // Fallback: Remove loading screen after 5 seconds maximum
    const fallbackTimeout = setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            clearInterval(progressInterval);
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.remove();
                }
            }, 500);
        }
    }, 5000);
    
    // Simulate loading time
    setTimeout(() => {
        clearTimeout(fallbackTimeout);
        clearInterval(progressInterval);
        if (loadingProgress) {
            loadingProgress.style.width = '100%';
        }
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.remove();
            }
        }, 500);
    }, 2000); // Reduced from 3000ms to 2000ms for faster loading
    
    // Add click to skip loading
    loadingScreen.addEventListener('click', () => {
        clearTimeout(fallbackTimeout);
        clearInterval(progressInterval);
        if (loadingProgress) {
            loadingProgress.style.width = '100%';
        }
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.remove();
            }
        }, 500);
    });
}

/**
 * Navigation System
 * Handles header scrolling effects and active navigation
 */
function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active navigation based on scroll position
        updateActiveNavigation();
    });
    
    // Navigation link click handling (only intercept hash links)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            const isHashLink = href.startsWith('#');
            if (!isHashLink) return; // allow normal navigation for non-hash links

            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                updateActiveNavigationLink(link);
            }
        }, { passive: true });
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Update active navigation link
 */
function updateActiveNavigationLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

/**
 * Hero Section Animations
 * Handles the main hero section animations and effects
 */
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroStats = document.querySelector('.hero-stats');
    const heroButtons = document.querySelector('.hero-buttons');
    
    // Animate hero elements on load
    if (heroTitle) {
        animateHeroElements();
    }
    
    // Parallax effect for hero shapes
    initHeroParallax();
}

/**
 * Animate hero section elements
 */
function animateHeroElements() {
    const elements = [
        '.hero-title .title-line',
        '.hero-subtitle',
        '.hero-stats',
        '.hero-buttons'
    ];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}

/**
 * Hero parallax effect for floating shapes
 */
function initHeroParallax() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

/**
 * Scroll Animations
 * Handles reveal animations for elements as they come into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add specific animations based on element type
                if (entry.target.classList.contains('program-card')) {
                    animateProgramCard(entry.target);
                } else if (entry.target.classList.contains('feature-item')) {
                    animateFeatureItem(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Animate program cards on reveal
 */
function animateProgramCard(card) {
    card.style.transform = 'translateY(0)';
    card.style.opacity = '1';
}

/**
 * Animate feature items on reveal
 */
function animateFeatureItem(item) {
    item.style.transform = 'translateX(0)';
    item.style.opacity = '1';
}

/**
 * Statistics Counter Animation
 * Animates the hero statistics numbers
 */
function initStatisticsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    };
    
    // Start counter animation when stats come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                animateCounter(statNumber);
                statsObserver.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

/**
 * Smooth Scrolling
 * Handles smooth scrolling for internal links
 */
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Mark page context for styling (home vs inner pages)
 */
function setPageContext() {
    const path = window.location.pathname;
    // Treat root or index.html as home page
    const isHome = /\/$|index\.html$|^$/i.test(path);
    document.body.classList.toggle('home', isHome);
}

/**
 * Back to Top Button
 * Shows/hides and handles back to top functionality
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('#back-to-top, #backToTop');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Form Handling
 * Handles contact form submission and validation
 */
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
}

/**
 * Handle contact form submission
 */
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.program) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you! Your message has been sent successfully.', 'success');
    e.target.reset();
}

/**
 * Handle newsletter form submission
 */
function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!email) {
        showNotification('Please enter your email address.', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('Thank you for subscribing to our newsletter!', 'success');
    e.target.reset();
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

/**
 * Mobile Menu Management
 * Handles mobile navigation toggle and animations
 */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = navMenu.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Initialize dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
                
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

/**
 * Particle Effects
 * Creates animated particles in the hero section
 */
function initParticleEffects() {
    const particlesContainer = document.getElementById('hero-particles');
    
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

/**
 * Create individual particle
 */
function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random particle properties
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: particleFloat ${duration}s linear infinite;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
}

/**
 * 3D Building Animation
 * Handles the 3D building rotation and effects
 */
function init3DBuilding() {
    const building = document.querySelector('.building-3d');
    
    if (!building) return;
    
    // Add mouse interaction for 3D building
    building.addEventListener('mousemove', (e) => {
        const rect = building.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
        
        building.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    
    // Reset building rotation when mouse leaves
    building.addEventListener('mouseleave', () => {
        building.style.transform = '';
    });
}

/**
 * Performance Optimization
 * Throttles scroll events for better performance
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll event handlers are already throttled in their respective functions
}, 16));

/**
 * Error Handling
 * Global error handler for better debugging
 */
window.addEventListener('error', (e) => {
    console.error('Website Error:', e.error);
});

/**
 * Page Load Performance
 * Measures and logs page load performance
 */
window.addEventListener('load', () => {
    // Performance timing
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
    
    // Remove loading screen if still present
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
});

/**
 * Accessibility Improvements
 * Keyboard navigation and screen reader support
 */
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Tab key navigation improvements
    if (e.key === 'Tab') {
        // Add focus indicators for keyboard navigation
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

/**
 * Virtual Tour Management
 * Handles the interactive campus tour functionality
 */
function initVirtualTour() {
    const tourTabs = document.querySelectorAll('.tour-tab');
    const tourScenes = document.querySelectorAll('.tour-scene');
    const startTourBtn = document.getElementById('start-tour');
    const downloadBrochureBtn = document.getElementById('download-brochure');
    
    // Tour tab switching
    tourTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tourType = tab.getAttribute('data-tour');
            
            // Update active tab
            tourTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding scene
            tourScenes.forEach(scene => {
                scene.classList.remove('active');
                if (scene.getAttribute('data-scene') === tourType) {
                    scene.classList.add('active');
                }
            });
        });
    });
    
    // Start guided tour
    if (startTourBtn) {
        startTourBtn.addEventListener('click', startGuidedTour);
    }
    
    // Download brochure
    if (downloadBrochureBtn) {
        downloadBrochureBtn.addEventListener('click', downloadBrochure);
    }
    
    // Scene controls
    initSceneControls();
}

/**
 * Initialize scene control buttons
 */
function initSceneControls() {
    const controlBtns = document.querySelectorAll('.control-btn');
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = btn.getAttribute('data-action');
            handleSceneControl(action);
        });
    });
}

/**
 * Handle scene control actions
 */
function handleSceneControl(action) {
    const activeScene = document.querySelector('.tour-scene.active');
    const tourImage = activeScene.querySelector('.tour-image');
    
    switch (action) {
        case 'zoom-in':
            zoomImage(tourImage, 1.2);
            break;
        case 'zoom-out':
            zoomImage(tourImage, 0.8);
            break;
        case 'fullscreen':
            toggleFullscreen(activeScene);
            break;
    }
}

/**
 * Zoom image functionality
 */
function zoomImage(image, factor) {
    const currentScale = image.style.transform.match(/scale\(([^)]+)\)/) || [null, 1];
    const newScale = parseFloat(currentScale[1]) * factor;
    
    // Limit zoom range
    if (newScale >= 0.5 && newScale <= 3) {
        image.style.transform = `scale(${newScale})`;
    }
}

/**
 * Toggle fullscreen for tour scene
 */
function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

/**
 * Start guided tour animation
 */
function startGuidedTour() {
    const tourTabs = document.querySelectorAll('.tour-tab');
    let currentIndex = 0;
    
    // Disable start button during tour
    const startBtn = document.getElementById('start-tour');
    startBtn.disabled = true;
    startBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tour in Progress...';
    
    // Auto-advance through tour tabs
    const tourInterval = setInterval(() => {
        // Remove active class from all tabs
        tourTabs.forEach(tab => tab.classList.remove('active'));
        
        // Activate current tab
        tourTabs[currentIndex].classList.add('active');
        
        // Trigger click event to show scene
        tourTabs[currentIndex].click();
        
        // Move to next tab
        currentIndex++;
        
        // End tour when all tabs have been shown
        if (currentIndex >= tourTabs.length) {
            clearInterval(tourInterval);
            currentIndex = 0;
            
            // Reset button
            startBtn.disabled = false;
            startBtn.innerHTML = '<i class="fas fa-play"></i> Start Guided Tour';
            
            // Show completion message
            showNotification('Virtual tour completed! Explore each area in detail.', 'success');
        }
    }, 3000); // 3 seconds per scene
}

/**
 * Download brochure functionality
 */
function downloadBrochure() {
    // Create a simple brochure content
    const brochureContent = `
        UET Mardan - Engineering Excellence
        
        Campus Highlights:
        • 50+ acres of campus area
        • Modern academic buildings
        • Beautiful green spaces
        • Campus-wide WiFi coverage
        • Ample parking facilities
        • Multiple dining options
        
        Engineering Programs:
        • Civil Engineering
        • Electrical Engineering
        • Mechanical Engineering
        • Computer Engineering
        
        Contact: info@uetmardan.edu.pk
        Phone: +92-937-1234567
    `;
    
    // Create blob and download
    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UET-Mardan-Brochure.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Brochure downloaded successfully!', 'success');
}

/**
 * Technologies Demo Management
 * Handles interactive technology demonstrations
 */
function initTechnologiesDemo() {
    const demoBtns = document.querySelectorAll('.demo-btn');
    const demoScreen = document.querySelector('.screen-content');
    
    demoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const demoType = btn.getAttribute('data-demo');
            runTechnologyDemo(demoType, demoScreen);
        });
    });
}

/**
 * Run technology demonstration
 */
function runTechnologyDemo(type, screen) {
    const demos = {
        ai: {
            title: 'AI System Active',
            content: 'Neural networks processing data...',
            animation: 'ai-processing'
        },
        vr: {
            title: 'VR Environment Loading',
            content: 'Creating immersive 3D world...',
            animation: 'vr-loading'
        },
        iot: {
            title: 'IoT Network Connected',
            content: 'Smart devices communicating...',
            animation: 'iot-connection'
        }
    };
    
    const demo = demos[type];
    if (!demo) return;
    
    // Update screen content
    screen.innerHTML = `
        <div class="demo-content ${demo.animation}">
            <h3>${demo.title}</h3>
            <p>${demo.content}</p>
            <div class="demo-visualization">
                <div class="demo-element"></div>
                <div class="demo-element"></div>
                <div class="demo-element"></div>
            </div>
        </div>
    `;
    
    // Add animation class
    screen.classList.add('active');
    
    // Reset after 5 seconds
    setTimeout(() => {
        screen.innerHTML = `
            <div class="loading-animation">
                <div class="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>AI System Initializing...</p>
            </div>
        `;
        screen.classList.remove('active');
    }, 5000);
}

/**
 * Enhanced Image Loading and Optimization
 */
function initImageOptimization() {
    const images = document.querySelectorAll('img[src*="unsplash"]');
    
    // Add lazy loading
    images.forEach(img => {
        img.loading = 'lazy';
        
        // Add error handling
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIExvYWRpbmcuLi48L3RleHQ+PC9zdmc+';
            img.alt = 'Image loading failed';
        });
    });
    
    // Intersection Observer for image animations
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image-loaded');
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Enhanced Form Validation
 */
function initEnhancedFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
        
        // Enhanced form submission
        form.addEventListener('submit', handleEnhancedFormSubmission);
    });
}

/**
 * Validate individual form field
 */
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearFieldError(field);
    
    // Validation rules
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

/**
 * Show field error message
 */
function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 5px;
        display: block;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

/**
 * Clear field error
 */
function clearFieldError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

/**
 * Enhanced form submission handler
 */
function handleEnhancedFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const inputs = form.querySelectorAll('input, select, textarea');
    let isFormValid = true;
    
    // Validate all fields
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showNotification('Please fix the errors in the form.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        if (form.classList.contains('contact-form')) {
            showNotification('Thank you! Your message has been sent successfully.', 'success');
        } else if (form.classList.contains('newsletter-form')) {
            showNotification('Thank you for subscribing to our newsletter!', 'success');
        }
        
        form.reset();
    }, 2000);
}

/**
 * Utility functions
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

/**
 * Performance monitoring
 */
function initPerformanceMonitoring() {
    // Monitor page load performance
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
            
            // Log performance metrics
            if (loadTime > 3000) {
                console.warn('Page load time is slow. Consider optimizing images and resources.');
            }
        });
    }
    
    // Monitor scroll performance
    let scrollCount = 0;
    const scrollThrottle = throttle(() => {
        scrollCount++;
        if (scrollCount % 100 === 0) {
            console.log(`Scrolled ${scrollCount} times`);
        }
    }, 100);
    
    window.addEventListener('scroll', scrollThrottle);
}

/**
 * Enhanced accessibility features
 */
function initEnhancedAccessibility() {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
            const icon = element.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                if (iconClass.includes('fa-play')) {
                    element.setAttribute('aria-label', 'Start guided tour');
                } else if (iconClass.includes('fa-download')) {
                    element.setAttribute('aria-label', 'Download brochure');
                } else if (iconClass.includes('fa-search-plus')) {
                    element.setAttribute('aria-label', 'Zoom in');
                } else if (iconClass.includes('fa-search-minus')) {
                    element.setAttribute('aria-label', 'Zoom out');
                } else if (iconClass.includes('fa-expand')) {
                    element.setAttribute('aria-label', 'Fullscreen view');
                }
            }
        }
    });
    
    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Space/Enter key for buttons
        if (e.key === ' ' || e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.tagName === 'BUTTON' || activeElement.tagName === 'A') {
                e.preventDefault();
                activeElement.click();
            }
        }
        
        // Arrow keys for tour navigation
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeTab = document.querySelector('.tour-tab.active');
            if (activeTab) {
                const tabs = Array.from(document.querySelectorAll('.tour-tab'));
                const currentIndex = tabs.indexOf(activeTab);
                let newIndex;
                
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                } else {
                    newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                }
                
                tabs[newIndex].click();
                tabs[newIndex].focus();
            }
        }
    });
}

/**
 * Department Management
 * Handles interactive department features and faculty interactions
 */
function initDepartments() {
    const departmentCards = document.querySelectorAll('.department-card');
    const facultyMembers = document.querySelectorAll('.faculty-member');
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    // Department card interactions
    departmentCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on buttons or links
            if (e.target.closest('.btn') || e.target.closest('a')) {
                return;
            }
            
            const department = card.getAttribute('data-department');
            showDepartmentDetails(department);
        });
    });
    
    // Faculty member interactions
    facultyMembers.forEach(member => {
        member.addEventListener('click', (e) => {
            e.stopPropagation();
            const facultyName = member.querySelector('h5').textContent;
            const facultyRole = member.querySelector('span').textContent;
            const facultyImg = member.querySelector('img').src;
            
            showFacultyProfile(facultyName, facultyRole, facultyImg);
        });
    });
    
    // Gallery image interactions
    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            showImageLightbox(img.src, img.alt);
        });
    });
    
    // Initialize department statistics animation
    initDepartmentStats();
}

/**
 * Show department details modal
 */
function showDepartmentDetails(department) {
    const departments = {
        civil: {
            name: 'Civil Engineering',
            description: 'Civil Engineering focuses on designing, constructing, and maintaining infrastructure projects including buildings, roads, bridges, and water systems.',
            programs: [
                'BSc Civil Engineering (4 years)',
                'MSc Structural Engineering (2 years)',
                'PhD Civil Engineering (3-5 years)'
            ],
            facilities: [
                'Structural Analysis Lab',
                'Concrete Technology Lab',
                'Surveying Lab',
                'Transportation Lab',
                'Geotechnical Lab',
                'Hydraulics Lab',
                'Environmental Lab',
                'CAD/CAM Lab'
            ],
            research: [
                'Sustainable Construction Materials',
                'Earthquake Resistant Structures',
                'Smart Infrastructure Systems',
                'Green Building Technologies'
            ]
        },
        software: {
            name: 'Software Engineering',
            description: 'Software Engineering focuses on developing high-quality software systems using systematic approaches and modern development methodologies.',
            programs: [
                'BSc Software Engineering (4 years)',
                'MSc Software Engineering (2 years)',
                'MSc Web Technologies (2 years)',
                'PhD Software Engineering (3-5 years)'
            ],
            facilities: [
                'Software Development Lab',
                'Database Systems Lab',
                'Web Technologies Lab',
                'Mobile App Development Lab',
                'Software Testing Lab',
                'Cloud Computing Lab'
            ],
            research: [
                'Software Architecture Patterns',
                'Machine Learning in Software',
                'Cybersecurity Applications',
                'Agile Development Methods'
            ]
        },
        ai: {
            name: 'AI & Machine Learning',
            description: 'AI & Machine Learning focuses on developing intelligent systems that can learn, reason, and make decisions like humans.',
            programs: [
                'BSc AI Engineering (4 years)',
                'MSc Machine Learning (2 years)',
                'PhD Artificial Intelligence (3-5 years)'
            ],
            facilities: [
                'AI Research Lab',
                'Machine Learning Lab',
                'Computer Vision Lab',
                'Natural Language Processing Lab',
                'Robotics Lab'
            ],
            research: [
                'Deep Learning Algorithms',
                'Computer Vision Systems',
                'Natural Language Processing',
                'Autonomous Robotics'
            ]
        },
        datascience: {
            name: 'Data Science',
            description: 'Data Science focuses on extracting meaningful insights from large datasets using statistical analysis and machine learning techniques.',
            programs: [
                'BSc Data Science (4 years)',
                'MSc Data Analytics (2 years)'
            ],
            facilities: [
                'Data Analytics Lab',
                'Big Data Processing Lab',
                'Statistical Analysis Lab',
                'Visualization Lab'
            ],
            research: [
                'Big Data Analytics',
                'Predictive Modeling',
                'Data Visualization',
                'Statistical Learning'
            ]
        },
        telecom: {
            name: 'Telecommunications',
            description: 'Telecommunications focuses on designing and implementing communication systems including wireless networks, fiber optics, and satellite communications.',
            programs: [
                'BSc Telecommunications (4 years)',
                'MSc Communication Systems (2 years)',
                'PhD Telecommunications (3-5 years)'
            ],
            facilities: [
                'Communication Systems Lab',
                'Wireless Networks Lab',
                'Fiber Optics Lab',
                'Satellite Communications Lab',
                'Network Security Lab',
                'Signal Processing Lab',
                'Antenna Design Lab'
            ],
            research: [
                '5G/6G Technologies',
                'Optical Communications',
                'Wireless Sensor Networks',
                'Network Security'
            ]
        },
        electrical: {
            name: 'Electrical Engineering',
            description: 'Electrical Engineering focuses on the study and application of electricity, electronics, and electromagnetism.',
            programs: [
                'BSc Electrical Engineering (4 years)',
                'MSc Power Systems (2 years)',
                'PhD Electrical Engineering (3-5 years)'
            ],
            facilities: [
                'Power Systems Lab',
                'Electronics Lab',
                'Control Systems Lab',
                'Electric Machines Lab',
                'High Voltage Lab',
                'Renewable Energy Lab',
                'Digital Electronics Lab',
                'Microprocessors Lab',
                'Instrumentation Lab'
            ],
            research: [
                'Smart Grid Technologies',
                'Renewable Energy Systems',
                'Electric Vehicle Charging',
                'Power Electronics'
            ]
        },
        mechanical: {
            name: 'Mechanical Engineering',
            description: 'Mechanical Engineering focuses on designing, analyzing, and manufacturing mechanical systems and machines.',
            programs: [
                'BSc Mechanical Engineering (4 years)',
                'MSc Manufacturing Engineering (2 years)',
                'PhD Mechanical Engineering (3-5 years)'
            ],
            facilities: [
                'Thermodynamics Lab',
                'Fluid Mechanics Lab',
                'Materials Science Lab',
                'Manufacturing Lab',
                'CAD/CAM Lab',
                'Robotics Lab',
                'Vibration Lab',
                'Heat Transfer Lab',
                'Machine Design Lab',
                'Automotive Lab'
            ],
            research: [
                'Advanced Manufacturing',
                'Robotics and Automation',
                'Sustainable Energy Systems',
                'Smart Materials'
            ]
        }
    };
    
    const dept = departments[department];
    if (!dept) return;
    
    // Create and show modal
    const modal = createDepartmentModal(dept);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Close modal functionality
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

/**
 * Create department details modal
 */
function createDepartmentModal(department) {
    const modal = document.createElement('div');
    modal.className = 'department-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${department.name}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>Description</h3>
                    <p>${department.description}</p>
                </div>
                
                <div class="modal-section">
                    <h3>Programs Offered</h3>
                    <ul>
                        ${department.programs.map(program => `<li>${program}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3>Laboratory Facilities</h3>
                    <ul>
                        ${department.facilities.map(facility => `<li>${facility}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3>Research Areas</h3>
                    <ul>
                        ${department.research.map(area => `<li>${area}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

/**
 * Show faculty profile modal
 */
function showFacultyProfile(name, role, image) {
    const modal = document.createElement('div');
    modal.className = 'faculty-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Faculty Profile</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="faculty-profile">
                    <img src="${image}" alt="${name}" class="faculty-profile-img">
                    <div class="faculty-details">
                        <h3>${name}</h3>
                        <p class="faculty-role">${role}</p>
                        <div class="faculty-info">
                            <p><strong>Education:</strong> PhD in Engineering</p>
                            <p><strong>Experience:</strong> 8+ years in academia</p>
                            <p><strong>Research Interests:</strong> Advanced Engineering Systems, Innovation</p>
                            <p><strong>Publications:</strong> 25+ research papers</p>
                            <p><strong>Email:</strong> ${name.toLowerCase().replace(' ', '.')}@uetmardan.edu.pk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

/**
 * Show image lightbox
 */
function showImageLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}" class="lightbox-img">
            <div class="lightbox-caption">${alt}</div>
            <button class="close-lightbox">&times;</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    setTimeout(() => lightbox.classList.add('show'), 10);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
            lightbox.classList.remove('show');
            setTimeout(() => lightbox.remove(), 300);
        }
    });
}

/**
 * Initialize department statistics animation
 */
function initDepartmentStats() {
    const statsSpans = document.querySelectorAll('.department-stats span');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.5 });
    
    statsSpans.forEach(span => {
        span.style.animationPlayState = 'paused';
        observer.observe(span);
    });
}

/**
 * Initialize background sliders
 */
function initBackgroundSliders() {
    const heroSlider = document.getElementById('heroSlider');
    if (!heroSlider) return;
    
    const slides = heroSlider.querySelectorAll('.slide');
    const dots = document.getElementById('heroSliderDots');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        const dotElements = dots.querySelectorAll('.dot');
        dotElements.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Auto-play slider
    setInterval(nextSlide, 5000);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

// Initialize background sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBackgroundSliders();
    initEventCalendar();
    initRegisterButtons();
});

console.log('UET Mardan Website - All JavaScript functionality initialized successfully!');
