// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download CV button (replace with your CV file path)
document.querySelectorAll('.cv-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        window.location.href = 'path/to/your-cv.pdf'; // Add your CV file
    });
});

// Initialize EmailJS with your public key (from dashboard)
emailjs.init('xwVqCFdyyLLMHAXiX'); // Replace with your EmailJS Public Key

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Send form data
    emailjs.sendForm('service_x7gzqxw', 'template_vfhamsu', this)
        .then(function() {
            alert('Message sent successfully!');
            this.reset(); // Clear form
        }, function(error) {
            alert('Failed to send: ' + JSON.stringify(error));
        });
});