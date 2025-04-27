emailjs.init('6GXpn1h2mojJlUVWh'); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');
  
    const serviceID = 'service_a44s14o'; 
    const templateID = 'template_pmb4xgp'; 
    
    if (name && email && message) {
        emailjs.send(serviceID, templateID, {
        name: name,
        email: email,
        message: message,
        title: "Webform Contact"
        })
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // alert('Message sent successfully!');
        status.textContent = 'Thank you! We will get back to you soon.';
        status.style.color = 'green';
        document.getElementById('contact-form').reset();
        }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
        });
    } else {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'red';
    }
});

const footer = document.getElementById('footer');
const currentYear = new Date().getFullYear();

footer.innerHTML = `&copy; ${currentYear} Because You Matter Behavioral Health. All rights reserved.`;
