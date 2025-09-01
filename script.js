// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent actual submit (no backend yet)
    alert('Thank you! Your message has been sent.');  // Show a message
    this.reset();  // Clear the form
});

// Download CV button (replace with your CV file path)
document.querySelectorAll('.cv-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        window.location.href = 'path/to/your-cv.pdf';  // Add your CV file
    });
});