// Basic client-side behavior: form handling and small enhancements
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const out = document.getElementById('formMessage');

      if(!name || !email || !message){
        out.textContent = 'Please complete all fields.';
        out.style.color = 'crimson';
        return;
      }

      // Simple email pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email)){
        out.textContent = 'Please enter a valid email address.';
        out.style.color = 'crimson';
        return;
      }

      // Simulate async submission
      out.textContent = 'Sending message...';
      out.style.color = '#333';
      setTimeout(function(){
        out.textContent = 'Thanks, your message was sent (simulated).';
        out.style.color = 'green';
        form.reset();
      }, 800);
    });
  }
});
