function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "felhasznalonev" && password === "jelszo") {
      alert("Sikeres bejelentkezés!");
    } else {
      alert("Hibás felhasználónév vagy jelszó!");
    }
  }
  