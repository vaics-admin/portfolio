// Button to explore more section
document.getElementById("exploreBtn").addEventListener("click", function () {
    window.scrollTo({
        top: document.getElementById("about").offsetTop,
        behavior: "smooth"
    });
});

// Form submission logic
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent!");
    document.getElementById("contactForm").reset();
});

// Animations on Scroll - Fade-in for elements
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll('.service-card');

    window.addEventListener('scroll', function () {
        serviceCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = 1;
            }
        });
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
});
