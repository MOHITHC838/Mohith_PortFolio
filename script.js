// Tab functionality for About section
function opentab(tabname) {
    const tablinks = document.getElementsByClassName("active-link");
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    const tabcontents = document.getElementsByClassName("active-tab");
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const skills = document.querySelector('.skills-container');
    const skillPosition = skills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if(skillPosition < screenPosition) {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
});

// Initialize skill cards with opacity 0 for animation
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// whatsappp message

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Get selected radio button
    const selectedOption = document.querySelector('input[name="inquiry"]:checked')?.value || 'Not specified';
    
    // Format WhatsApp message
    const whatsappMessage = 
        `*New Contact Request*%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Inquiry Type:* ${selectedOption}%0A` +
        `*Message:* ${message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/917358231435?text=${whatsappMessage}`, '_blank');
    
    // Optional: Reset form
    document.getElementById('contactForm').reset();
}