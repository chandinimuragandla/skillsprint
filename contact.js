function validateForm() {
    var username = document.getElementById('First name').value.trim();
    var email = document.getElementById('Email').value.trim();
    var password = document.getElementById(' phone number').value.trim();
    var confirm_password = document.getElementById('Message').value;
  
    // Simple validation example
    if (username === '' || email === '' || password === '' || confirm_password === '') {
      alert('Please fill in all fields');
      return false;
    }
  
    
  
    // Additional validations like email format can be added here
    
    return true;
  }