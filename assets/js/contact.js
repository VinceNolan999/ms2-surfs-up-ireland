function sendMail(contactForm) {
    emailjs.send("default_service","template_4ew7tdh", {
        "from_fname": contactForm.from_fname.value,
        "from_lname": contactForm.from_lname.value,
        "from_email": contactForm.from_email.value,
        "message": contactForm.message.value
    })
      .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    
    return false;  // To block from loading a new page
    
}