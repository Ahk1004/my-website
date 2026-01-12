// Toggle Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    // Switch icon between bars and times (X)
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu when clicking a link (UX fix for mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});

// Header Background on Scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Offset for header height
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Simple Contact Form Handler (Visual feedback only)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // In a real website, you would connect this to a backend or EmailJS
    const btn = contactForm.querySelector("button");
    const originalText = btn.innerText;
    
    btn.innerText = "Sending...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        btn.innerText = "Message Sent!";
        btn.style.backgroundColor = "#22c55e"; // Green
        btn.style.color = "#fff";
        contactForm.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
            btn.style.opacity = "1";
        }, 3000);
    }, 1500);
});