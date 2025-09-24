// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download CV button
document.querySelectorAll('.cv-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = 'Imasha_CV.pdf'; // Replace with your actual CV file name
        link.download = 'Imasha_CV.pdf'; // File name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// Initialize EmailJS and handle form submission
(function() {
    emailjs.init('xwVqCFdyyLLMHAXiX'); // Your EmailJS Public Key

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const form = this;

        emailjs.sendForm('service_x7gzqxw', 'template_vfhamsu', form)
            .then(function(response) {
                console.log('Success:', response);
                alert('Message sent successfully!');
                form.reset(); // Clear form
            }, function(error) {
                console.error('Error:', error);
                alert('Failed to send: ' + JSON.stringify(error));
            });
    });
})();

// Pop-up functionality for boxes
document.addEventListener('DOMContentLoaded', () => {
    const aboutText = document.querySelector('.about-text');
    const skills = document.querySelector('.skills');
    const stats = document.querySelectorAll('.stat');

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;'; // Close symbol
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Click handlers
    aboutText.addEventListener('click', () => {
        modalContent.innerHTML = '<h3>My Introduction</h3><p>A driven undergraduate, I blend Software Engineering innovation with Project Management leadership to craft cutting-edge solutions. As an IEEE WIE volunteer, I empower tech communities while shaping impactful projects.</p>' + closeBtn.outerHTML;
        modal.style.display = 'flex';
    });

    skills.addEventListener('click', () => {
        modalContent.innerHTML = '<h3>Skills</h3><div class="skills-modal"><div class="skill-column"><h4>Frontend</h4><ul><li>HTML</li><li>CSS</li><li>Tailwind CSS</li><li>JavaScript</li><li>React</li></ul></div><div class="skill-column"><h4>Backend</h4><ul><li>JAVA</li><li>Node.js</li><li>Express.js</li><li>C++</li></ul></div><div class="skill-column"><h4>Database</h4><ul><li>MySQL</li><li>MongoDB</li></ul></div></div>' + closeBtn.outerHTML;
        modal.style.display = 'flex';
    });

    stats.forEach(stat => {
        stat.addEventListener('click', () => {
            const title = stat.querySelector('h3').textContent;
            const desc = stat.querySelector('p').textContent;
            const tech = stat.querySelectorAll('p')[1].textContent;
            modalContent.innerHTML = `<h3>${title}</h3><p>${desc}</p><p><strong>Technologies:</strong> ${tech}</p>` + closeBtn.outerHTML;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});