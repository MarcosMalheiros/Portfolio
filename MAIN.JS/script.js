
// Toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
});

// Scroll sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
});
    }
});

  // Sticky header
const header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when clicking navbar links (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
});

// Scroll reveal
ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// Typed.js
const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer!', 'Software Engineering Student!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
});
