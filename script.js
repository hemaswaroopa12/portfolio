/*=========================================
        TYPING ANIMATION
==========================================*/

const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Problem Solver",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent = currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


/*=========================================
        SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card, .certificate-card, .achievement-card, .timeline-box, .about-content"
);

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        BACK TO TOP BUTTON
==========================================*/

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=========================================
        HERO IMAGE EFFECT
==========================================*/

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {

        heroImage.style.transform = "scale(1.05)";

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = "scale(1)";

    });

}


/*=========================================
        BUTTON RIPPLE EFFECT
==========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.offsetX - diameter / 2}px`;

        circle.style.top = `${e.offsetY - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*=========================================
        CONTACT FORM
==========================================*/

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


/*=========================================
        PRELOADER FADE
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/*=========================================
        PARTICLE BACKGROUND (OPTIONAL)
==========================================*/

/*
If you want animated particles later, add particles.js
and initialize it here.
*/


/*=========================================
        CONSOLE MESSAGE
==========================================*/

console.log(
`
==========================================
 Portfolio Developed By
 Kodavali Hema Swaroopa
 Full Stack Developer
==========================================
`
);