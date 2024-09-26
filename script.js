function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const submittedMessageDiv = document.getElementById('submittedMessage');

    if (name === '') {
        alert('Please enter your name');
        return false;
    }

    if (email === '') {
        alert('Please enter your email');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email');
        return false;
    }

    if (phone === '') {
        alert('Please enter your phone number');
        return false;
    }

    const phonePattern = /^[0-9]{10,12}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10-12 digits)');
        return false;
    }

    if (message === '') {
        alert('Please enter a message');
        return false;
    }

    // Display submitted message on screen
    submittedMessageDiv.style.display = 'block';
    submittedMessageDiv.innerHTML = `
        <strong>Thank you for your message, ${name}!</strong><br>
        We have received your message and will get back to you at ${email}.<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>Message:</strong> ${message}
    `;

    return false;  // Prevent form submission for demo purposes
}
