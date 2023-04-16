const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("form-submit");
const loginErrorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", (button) => {
    button.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "username" && password === "password") {
        alert("You have successfully logged in.");
        location.replace("Welcome Page.html");
    } else {
        loginErrorMessage.style.opacity = 1;
    }
})