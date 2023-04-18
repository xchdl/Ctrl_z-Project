const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Store the new user's information in localStorage
  localStorage.setItem(username, JSON.stringify({ name, password }));

  window.location.href = "login.html"; // Redirect to login page
});

// Handle login form submission
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve the user's information from localStorage
  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    window.location.href = "home.html"; // Redirect to home page
  } else {
    alert("Invalid email or password"); // Display error message
  }
});