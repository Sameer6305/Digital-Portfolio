// ====================================
// Enhanced Portfolio with Advanced Features
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPortfolioFilter();
    initContactForm();
    initCursorEffect();
    initScrollAnimations();
    initParallax();
    initTypeWriter();
    initSmoothScroll();
});

// Navigation functionality
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            // Remove active classes
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active-section'));

            // Add active classes
            button.classList.add('active');
            document.getElementById(targetSection).classList.add('active-section');

            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Add ripple effect
            createRipple(button, event);
        });
    });
}

// Portfolio filter with smooth animations
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // Show all projects initially
    projectItems.forEach(item => item.classList.add('active'));

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Remove active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Fade out all projects
            projectItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
            });

            // Filter and fade in matching projects
            setTimeout(() => {
                projectItems.forEach((item, index) => {
                    const category = item.getAttribute('data-category');

                    if (filterValue === 'all' || category === filterValue) {
                        item.classList.add('active');
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, index * 100);
                    } else {
                        item.classList.remove('active');
                    }
                });
            }, 300);
        });
    });
}

// Enhanced contact form with validation
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (form) {
        const inputs = form.querySelectorAll('.form-input');

        // Add floating label effect
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const button = form.querySelector('.form-btn');
            const originalContent = button.innerHTML;

            // Validate inputs
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ef4444';
                    isValid = false;
                    setTimeout(() => {
                        input.style.borderColor = '';
                    }, 2000);
                }
            });

            if (!isValid) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
            button.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check-circle"></i> <span>Message Sent!</span>';
                form.reset();

                setTimeout(() => {
                    button.innerHTML = originalContent;
                    button.disabled = false;
                }, 3000);

                showNotification('Thank you! Your message has been sent successfully.', 'success');
                
                // Confetti effect
                createConfetti();
            }, 2000);
        });
    }
}

// Custom cursor effect - Disabled
function initCursorEffect() {
    // Cursor effect removed for cleaner experience
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.service-item, .timeline-item, .skill-category, .info-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Parallax effect for particles
function initParallax() {
    const particles = document.querySelectorAll('.particle');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index + 1) * 30;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Typewriter effect for profile role
function initTypeWriter() {
    const roleElement = document.querySelector('.profile-role');
    if (!roleElement) return;

    const roles = [
        'Full Stack Developer',
        'AI/ML Engineer',
        'Backend Specialist',
        'Problem Solver'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
            typingSpeed = 50;
        } else {
            charIndex++;
            typingSpeed = 100;
        }

        roleElement.textContent = currentRole.substring(0, charIndex);

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Uncomment to enable typewriter effect
    // setTimeout(type, 1500);
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    const bgColor = type === 'success' ? '#10b981' : '#ef4444';

    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${bgColor};
        color: white;
        padding: 18px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 15px;
        font-weight: 500;
        animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    `;

    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    // Add animation styles
    if (!document.getElementById('notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Create ripple effect
function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => ripple.remove(), 600);
}

// Confetti effect
function createConfetti() {
    const colors = ['#fbbf24', '#a78bfa', '#60a5fa', '#10b981', '#ef4444'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${window.innerWidth / 2}px;
            top: ${window.innerHeight / 2}px;
            opacity: 1;
            pointer-events: none;
            z-index: 10000;
            border-radius: 50%;
        `;

        document.body.appendChild(confetti);

        const angle = (Math.PI * 2 * i) / confettiCount;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = 0, y = 0;
        let opacity = 1;

        const animate = () => {
            x += vx;
            y += vy + 0.5;
            opacity -= 0.02;

            confetti.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
            confetti.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };

        animate();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const navButtons = Array.from(document.querySelectorAll('.nav-item'));
    const activeButton = document.querySelector('.nav-item.active');
    const currentIndex = navButtons.indexOf(activeButton);

    if (e.key === 'ArrowRight' && currentIndex < navButtons.length - 1) {
        navButtons[currentIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navButtons[currentIndex - 1].click();
    }
});

// Console Easter Egg
console.log('%c👋 Welcome to my Portfolio!', 'color: #fbbf24; font-size: 24px; font-weight: bold;');
console.log('%c� Built with passion and modern web technologies', 'color: #a78bfa; font-size: 16px;');
console.log('%c💼 Looking to collaborate? Let\'s connect!', 'color: #60a5fa; font-size: 16px;');

// Performance optimization
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}
