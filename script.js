(function() {
    emailjs.init('DjKhDnD6JffaHYVw0');
})();

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_29bq406', 'template_aofmhgv', this)
        document.getElementById("textBox").value = "";
        alert('YOUR STORY WAS SEND!');
    });
}