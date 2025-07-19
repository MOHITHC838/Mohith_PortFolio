 // Mobile Navigation
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.classList.toggle('active');
 });

 // Close mobile menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
         hamburger.classList.remove('active');
     });
 });

 // Tab functionality
 const tabBtns = document.querySelectorAll('.tab-btn');
 const tabContents = document.querySelectorAll('.tab-content');

 tabBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         const tabId = btn.getAttribute('data-tab');
         
         // Remove active class from all buttons and contents
         tabBtns.forEach(btn => btn.classList.remove('active'));
         tabContents.forEach(content => content.classList.remove('active'));
         
         // Add active class to clicked button and corresponding content
         btn.classList.add('active');
         document.getElementById(tabId).classList.add('active');
     });
 });

 // WhatsApp message function
 function sendWhatsAppMessage() {
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     const selectedOption = document.querySelector('input[name="inquiry"]:checked')?.value || 'Not specified';
     
     const whatsappMessage = 
         `*New Contact Request*%0A%0A` +
         `*Name:* ${name}%0A` +
         `*Email:* ${email}%0A` +
         `*Inquiry Type:* ${selectedOption}%0A` +
         `*Message:* ${message}`;
     
     window.open(`https://wa.me/917358231435?text=${whatsappMessage}`, '_blank');
     document.getElementById('contactForm').reset();
 }

 // Animate elements on scroll
 function animateOnScroll() {
     const elements = document.querySelectorAll('.skill-card, .project-card');
     const windowHeight = window.innerHeight;
     
     elements.forEach(element => {
         const elementPosition = element.getBoundingClientRect().top;
         const animationPoint = windowHeight / 1.3;
         
         if(elementPosition < animationPoint) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 }

 // Initialize animations
 window.addEventListener('load', () => {
     // Set initial state for animated elements
     const animatedElements = document.querySelectorAll('.skill-card, .project-card');
     animatedElements.forEach(el => {
         el.style.opacity = '0';
         el.style.transform = 'translateY(20px)';
         el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
     });
     
     animateOnScroll();
 });

 window.addEventListener('scroll', animateOnScroll);


 function sendToWhatsApp() {
    // Get and trim form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const inquiryType = document.querySelector('input[name="inquiry"]:checked')?.value || 'Not specified';

    // Validate required fields
    if (!name) {
        alert('Please enter your name');
        document.getElementById('name').focus();
        return;
    }
    if (!email) {
        alert('Please enter your email');
        document.getElementById('email').focus();
        return;
    }
    if (!message) {
        alert('Please enter your message');
        document.getElementById('message').focus();
        return;
    }

    // Format WhatsApp message with emojis
    let whatsappMessage = `✨ *New Contact Request* ✨\n\n`;
    whatsappMessage += `👤 *Name:* ${name}\n`;
    whatsappMessage += `📧 *Email:* ${email}\n`;
    if (phone) whatsappMessage += `📱 *Phone:* ${phone}\n`;
    whatsappMessage += `📌 *Inquiry Type:* ${inquiryType}\n\n`;
    whatsappMessage += `💬 *Message:*\n${message}\n\n`;
    whatsappMessage += `_Looking forward to your response!_`;

    // Encode for URL (handles emojis and line breaks)
    const encodedMessage = encodeURIComponent(whatsappMessage)
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/917358231435?text=${encodedMessage}`;

    // Try to open WhatsApp
    try {
        const newWindow = window.open(whatsappUrl, '_blank');
        if (!newWindow || newWindow.closed) {
            throw new Error('Popup blocked');
        }
        document.getElementById('contactForm').reset();
        alert('Redirecting to WhatsApp... Please send the pre-filled message.');
    } catch (e) {
        alert('Please allow popups or contact me directly at +91 7358231435');
    }
}