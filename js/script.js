const footer = document.getElementById('copyright');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Because You Matter Behavioral Health`;

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    emailjs.init({
        publicKey: "6GXpn1h2mojJlUVWh",
    });
    
    const captcha = document.getElementById('captcha-error')

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        // alert("Please complete the reCAPTCHA.");
        captcha.textContent = 'Please complete the captcha';
        captcha.style.color = 'red';
        return;
    };
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');

    const serviceID = 'service_hhikm7f'; 
    const templateID = 'template_pmb4xgp'; 

    if (name && email && message) {
        emailjs.send(serviceID, templateID, {
        name: name,
        email: email,
        phone: phone,
        message: message,
        title: "Webform Contact",
        time: new Date().toString()
        })
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully.');
        document.getElementById('appointment-form').reset();
    }, function(error) {
        console.log('FAILED...', error);
        status.textContent = 'There was an error in sending your message';
        status.style.color = 'red';
        });
    } else {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'blue';
    };
    
});


setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    let hours = d.getHours()
    let minutes = d.getMinutes().toString().padStart(2, '0')
    let seconds = d.getSeconds().toString().padStart(2, '0')
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}