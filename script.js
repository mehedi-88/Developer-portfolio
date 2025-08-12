// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initTypingAnimation();
    initMobileNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initPortfolioFiltering();
    initTestimonialsCarousel();
    initPricingToggle();
    initContactForm();
    initServiceDetails();
});

// Typing Animation for Hero Section
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const titles = [
        "Digital Marketing Expert",
        "Web Developer", 
        "Shopify Dropshipping Specialist"
    ];
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentTitle = titles[currentIndex];
        
        if (isDeleting) {
            currentText = currentTitle.substring(0, currentText.length - 1);
            typingSpeed = 50;
        } else {
            currentText = currentTitle.substring(0, currentText.length + 1);
            typingSpeed = 100;
        }

        typingText.textContent = currentText;

        if (!isDeleting && currentText === currentTitle) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % titles.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(typeWriter, typingSpeed);
    }

    typeWriter();
}

// Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                // Reset hamburger menu
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations and Active Navigation
function initScrollAnimations() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Portfolio Filtering
function initPortfolioFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Testimonials Carousel
function initTestimonialsCarousel() {
    let currentTestimonial = 1;
    const totalTestimonials = 3;
    let autoPlayInterval;
    
    function showTestimonial(n) {
        const testimonials = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.dot');
        
        // Hide all testimonials
        testimonials.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current testimonial
        if (n > totalTestimonials) currentTestimonial = 1;
        if (n < 1) currentTestimonial = totalTestimonials;
        
        testimonials[currentTestimonial - 1].classList.add('active');
        dots[currentTestimonial - 1].classList.add('active');
    }
    
    function nextTestimonial() {
        showTestimonial(currentTestimonial += 1);
    }
    
    function prevTestimonial() {
        showTestimonial(currentTestimonial -= 1);
    }
    
    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextTestimonial, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Pause on hover
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Make functions globally available
    window.changeTestimonial = function(direction) {
        if (direction === 1) {
            nextTestimonial();
        } else {
            prevTestimonial();
        }
        // Reset auto-play timer
        stopAutoPlay();
        startAutoPlay();
    };
    
    window.currentTestimonial = function(n) {
        currentTestimonial = n;
        showTestimonial(currentTestimonial);
        // Reset auto-play timer
        stopAutoPlay();
        startAutoPlay();
    };
}

// Pricing Toggle (Monthly/Yearly)
function initPricingToggle() {
    const pricingToggle = document.getElementById('pricing-toggle');
    const priceAmounts = document.querySelectorAll('.amount');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            const isYearly = this.checked;
            
            priceAmounts.forEach(amount => {
                const monthlyPrice = amount.getAttribute('data-monthly');
                const yearlyPrice = amount.getAttribute('data-yearly');
                
                if (isYearly) {
                    amount.textContent = yearlyPrice;
                } else {
                    amount.textContent = monthlyPrice;
                }
            });
        });
    }
}

// Service Details Toggle
function initServiceDetails() {
    // Make function globally available
    window.toggleServiceDetails = function(serviceId) {
        const details = document.getElementById(`${serviceId}-details`);
        const button = event.target;
        const icon = button.querySelector('i');
        
        if (details) {
            details.classList.toggle('active');
            
            if (details.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
                button.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                icon.style.transform = 'rotate(0deg)';
                button.innerHTML = 'Learn More <i class="fas fa-chevron-down"></i>';
            }
        }
    };
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            if (!validateForm(formObject)) {
                return;
            }
            
            // Show loading state
            submitBtn.classList.add('loading');
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Hide loading state
                submitBtn.classList.remove('loading');
                
                // Show success modal
                showSuccessModal();
                
                // Reset form
                contactForm.reset();
                
                // Reset form labels
                const labels = contactForm.querySelectorAll('label');
                labels.forEach(label => {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--text-light)';
                });
                
            }, 2000);
        });
        
        // Form field focus effects
        const formFields = contactForm.querySelectorAll('input, select, textarea');
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                const label = this.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.style.top = '-0.5rem';
                    label.style.fontSize = '0.875rem';
                    label.style.color = 'var(--primary-color)';
                }
            });
            
            field.addEventListener('blur', function() {
                const label = this.previousElementSibling;
                if (label && label.tagName === 'LABEL' && !this.value) {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--text-light)';
                }
            });
        });
    }
}

// Form Validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.service) {
        errors.push('Please select a service interest');
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    // Check honeypot field
    if (formData.website) {
        errors.push('Form submission blocked');
    }
    
    if (errors.length > 0) {
        showValidationErrors(errors);
        return false;
    }
    
    return true;
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Validation Errors
function showValidationErrors(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
    
    // Show new error messages
    errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = 'color: #dc2626; font-size: 0.875rem; margin-top: 0.5rem;';
        errorDiv.textContent = error;
        
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.parentNode.insertBefore(errorDiv, submitBtn);
    });
}

// Success Modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Rate Limiting for Form Submission
let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN = 5000; // 5 seconds

function isRateLimited() {
    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
        return true;
    }
    lastSubmissionTime = now;
    return false;
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance Optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Update active navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100);

// Add optimized scroll listener
window.addEventListener('scroll', optimizedScrollHandler);

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .slide-in-left {
        animation: slideInLeft 0.6s ease forwards;
    }
    
    .slide-in-right {
        animation: slideInRight 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('Portfolio website error:', e.message);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }
        }, 0);
    });
}