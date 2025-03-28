// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    fetch('https://formspree.io/f/your_form_id', {
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
