document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navContainer = document.querySelector('.nav-container');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Auto-close mobile menu on scroll
        if (navContainer && navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    // Close mobile menu when nav links are clicked
    const navLinksList = document.querySelectorAll('.nav-links a, .nav-mobile-cta');
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navContainer && navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });



    // Simple reveal animation
    const reveals = document.querySelectorAll('.card-dayos, .offer-box, .plan-card, .dark-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(el);
    });
});
