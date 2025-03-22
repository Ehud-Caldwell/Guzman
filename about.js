document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");

    // Hover Animation (Slight Enlargement)
    logo.addEventListener("mouseenter", () => {
        logo.style.transform = "scale(1.1)";
        logo.style.transition = "transform 0.3s ease";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "scale(1)";
    });

    // Click Event (Redirect to Homepage)
    logo.addEventListener("click", () => {
        window.location.href = "GlimmerInWeb.html"; // Ensure this is your homepage filename
    });

    // Scroll Effect (Resize Logo on Scroll)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            logo.style.width = "90px";  // Shrinks the logo when scrolling down
        } else {
            logo.style.width = "120px"; // Restores original size when at top
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth Scroll for All Links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                let target = document.querySelector(this.getAttribute("href"));
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
