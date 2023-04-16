function myFunction() {
  var passwordInput = document.getElementById('lname1');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
