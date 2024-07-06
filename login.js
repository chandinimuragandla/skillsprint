function validateLogin(){
var email = document.getElementById('Email').Value.trim();
var password=document.getElementById('password').value;

//validation 
if (email ===''|| password===''){
    alert('please fill all fields');
    return false;
}
alert()
return true;
}