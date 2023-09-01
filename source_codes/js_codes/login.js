const showPasswordCheckbox = document.getElementById("show-pass-check");
const passwordInput = document.getElementById("pass-input");

showPasswordCheckbox.addEventListener("change", function() {
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

document.getElementById("signin-btn").addEventListener("click", function() {
    var emailInput = document.getElementById("email-input").value;
    var passwordInput = document.getElementById("pass-input").value;

    if (!emailInput && !passwordInput) {
        alert("Please fill email and password.");
    } else if (!emailInput) {
        alert("Please fill email.");
    } else if (!passwordInput) {
        alert("Please fill the password.");
    } else {
        window.location.href = "home.html"; 
        localStorage.setItem("email",emailInput);
        localStorage.setItem("password",passwordInput);
    }
});