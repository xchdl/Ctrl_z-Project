const signupForm = document.getElementById("form");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Store the new user's information in localStorage
  localStorage.setItem(username, JSON.stringify({ email, password }));

  window.location.href = "Login page.html"; // Redirect to login page
});

// Handle login form submission
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("form-submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username-field").value;
  const password = document.getElementById("password-field").value;

  // Retrieve the user's information from localStorage
  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    window.location.href = "Welcome Page.html"; // Redirect to home page
  } else {
    loginErrorMessage.style.opacity = 1;
  }
});



const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    formControl=input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Email is not valid');
      }
}
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
      } else {
        showSuccess(input);
      } });
    }          
       

function checkLength(input, min, max) {
        if (input.value.length < min) {
          showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        } else if (input.value.length > max) {
          showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        } else {
          showSuccess(input);
        }
      }

function checkPasswordsMatch(input1, input2) {
        if (input1.value!==input2.value) {
          showError(input2, 'Passwords do not match');
        }
      }
function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      } 


form.addEventListener('submit', function (e) {
        e.preventDefault();
      
        checkRequired([username, email, password, password2]);
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
      })