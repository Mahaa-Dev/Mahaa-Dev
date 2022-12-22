// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (!email || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!message) {
        alert("Please enter a message.");
        return;
    }

    alert(`Thank you for your message, ${name}!`);
});

// Smooth scroll
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scroll({
            top: targetElement.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    });
});

// Responsive navigation
const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector("nav");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});
