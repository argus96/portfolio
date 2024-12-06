emailjs.init("RuPw8VU7kO3VGIvXP"); // Initialize Email.js with your public key

function SendMail() {
    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_mir1g1z", "template_8y1tk3r", params)
        .then(function (response) {
            alert("Success! Email sent with status: " + response.status);
        })
        .catch(function (error) {
            console.error("Error: ", error);
            alert("Failed to send email. Please try again.");
        });
}
