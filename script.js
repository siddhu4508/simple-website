// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your query! We will contact you soon.');
    this.reset();
});

// WhatsApp Business Chat Integration
document.getElementById('whatsappChat').addEventListener('click', function () {
    var phoneNumber = "+917382102211"; // Replace with your WhatsApp Business number
    var message = encodeURIComponent("Hello, I have a query regarding your moving services.");
    var url = "https://wa.me/" + phoneNumber + "?text=" + message;
    window.open(url, "_blank");
});