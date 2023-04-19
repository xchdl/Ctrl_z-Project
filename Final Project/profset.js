function myFunction() {
  var passwordInput = document.getElementById('lname1');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }

}


function myFunction(x) {
  document.getElementById("OverlayMenu").style.width = "250px";

}
function closebtn(){
  document.getElementById("OverlayMenu").style.width = "0";
}