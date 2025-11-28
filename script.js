const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();

        if (nameInput === '' || emailInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            contactForm.reset();
        }
    });
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display =
            navLinks.style.display === 'flex' ? 'none' : 'flex';

        navLinks.style.flexDirection = 'column';
    });
}

