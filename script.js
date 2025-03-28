// Dark Mode Toggle
const toggleTheme = document.getElementById('theme-toggle');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Contact Form Submission (Send to Email)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Send email using Formspree
    fetch('https://formspree.io/f/your_form_id', {  // REPLACE 'your_form_id' with your Formspree ID
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Error sending message. Try again!');
        }
    });
});
