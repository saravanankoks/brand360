// Close mobile menu on scroll
window.addEventListener('scroll', () => {
    document.getElementById('mob-menu').classList.remove('open');
}, { passive: true });
// Keyboard close modal
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.getElementById('enquiry-modal').classList.remove('open');
});


// Form Validation
function filterPort(btn, cat) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.port-item').forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
    });
}
function handleSubmit() {
    const name = document.getElementById('f-name').value;
    const phone = document.getElementById('f-phone').value;
    const email = document.getElementById('f-email').value;
    if (!name || !phone || !email) {
        alert('Please fill in your name, phone, and email to proceed.');
        return;
    }
    document.getElementById('enquiry-modal').classList.remove('open');
    alert('Thank you, ' + name + '! Our team will be in touch within 24 hours.\n\nOr call us now: +91 98844 26115');
}


// Number counters
document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.querySelector(".stats");
    const counters = document.querySelectorAll(".stat-n");
    let started = false;

    const animateCounter = (counter) => {
        const target = +counter.dataset.count;
        const isK = counter.textContent.includes("K");
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                counter.textContent = Math.floor(current) + (isK ? "K+" : "+");
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (isK ? "K+" : "+");
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    counters.forEach(animateCounter);
                    observer.unobserve(statsSection);
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(statsSection);
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
});

// Scroll to top
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
