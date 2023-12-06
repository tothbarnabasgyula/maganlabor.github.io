function generatePatientID() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function validateRegistration() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    
    if (password !== confirmPassword) {
      alert("A jelszavak nem egyeznek!");
      return;
    }
  
    
    alert(`Sikeres regisztráció!\nFelhasználónév: ${username}\nE-mail: ${email}`);
  }
  