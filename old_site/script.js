const footer = document.getElementById('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Because You Matter Behavioral Health. All rights reserved.`;

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');
    const isoTimestamp = new Date().toISOString();
  
    const serviceID = 'service_a44s14o'; 
    const templateID = 'template_pmb4xgp'; 
    
    if (name && email && message) {
        emailjs.send(serviceID, templateID, {
        name: name,
        email: email,
        message: message,
        title: "Webform Contact",
        time: new Date().toString()
        })
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        status.textContent = 'Your message has been sent.';
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

setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    let hours = d.getHours()
    let minutes = d.getMinutes().toString().padStart(2, '0')
    let seconds = d.getSeconds().toString().padStart(2, '0')
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}