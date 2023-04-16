function myFunction() {
    var passwordInput = document.getElementById('pw');
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
  
  function myFunction1() {
    var passwordInput = document.getElementById('pw2');
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  const passwordInput = document.getElementById('pw');
  const confirmPasswordInput = document.getElementById('pw2');
function pw(){
    const passwordInput = document.getElementById('pw');
    const confirmPasswordInput = document.getElementById('pw2');
  if(passwordInput.value !==confirmPasswordInput.value){
    alert("Passwords do not match")
  }}