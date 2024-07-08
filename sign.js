function validateForm()
 {
    var username = document.getElementById('First name').value.trim();
    var email = document.getElementById('Last name').value.trim();
    var password = document.getElementById('Email').value.trim();
    var confirm_password = document.getElementById('password').value;
  
    // Simple validation example
    if (username === '' || email === '' || password === '' || confirm_password === '') {
      alert('Please fill in all fields');
    

      return false;
    }
   
    if (password !== confirm_password) {
      alert('Passwords do not match');
      return false;
    }
     
   return true
  
  
  }
  alert('Registration is successfull');
