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
