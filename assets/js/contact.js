const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_4ew7tdh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {      
      btn.value = 'Send Email';
      clearForm();
      alert('Sent!');
      }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
    
});

function clearForm() {
  document.getElementById('from_fname').value = '';
  document.getElementById('from_lname').value = '';
  document.getElementById('from_email').value = '';
  document.getElementById('message').value = '';
}