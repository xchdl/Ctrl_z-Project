function myFunction() {
  var passwordInput = document.getElementById('lname1');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }

}
window.addEventListener('load', function() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const email = localStorage.getItem('email');
  document.getElementById('lname').value = username;
  document.getElementById('lname1').value = password;
  document.getElementById('lname2').value = email;
});




function myFunction2(x) {
  document.getElementById("OverlayMenu").style.width = "250px";

}
function closebtn(){
  document.getElementById("OverlayMenu").style.width = "0";
}