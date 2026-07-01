// ========== SECURITY ==========
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
    }
});

// ========== CUSTOM CURSOR ==========
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 6,
        y: e.clientY - 6,
        duration: 0.1,
    });

    gsap.to(cursorFollower, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.5,
    });
});

const hoverElements = document.querySelectorAll('a, button, .portfolio-card, .download-btn, .phone-link');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.borderColor = '#00bcd4';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.borderColor = '#00ff88';
    });
});

// ========== LOADER ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
        document.body.style.cursor = 'none';
    }, 2000);
});

// ========== GSAP ==========
gsap.registerPlugin(ScrollTrigger);

// انیمیشن Header
gsap.from('.logo-css', {
    duration: 1.5,
    scale: 0,
    rotation: 360,
    ease: 'back.out(1.7)',
});

gsap.from('.studio-name', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out',
});

gsap.from('.tagline', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.6,
    ease: 'power3.out',
});

// انیمیشن کارت‌ها
gsap.utils.toArray('.portfolio-card').forEach((card, index) => {
    gsap.fromTo(card,
        { y: 80, opacity: 0, scale: 0.9 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            }
        }
    );
});

console.log('%c🔥 Z208 Studio %c| %cآماده!',
    'color: #00ff88; font-size: 20px; font-weight: bold;',
    '',
    'color: #00bcd4; font-size: 14px;'
);