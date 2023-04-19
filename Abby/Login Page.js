const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("form-submit");
const loginErrorMessage = document.getElementById("error-message");

loginButton.addEventListener("click", (button) => {
    button.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Discreetly" && password === "12345678" || username === "ctrlZ" && password ==="Discreetly" || username === "Mydiary" && password === "secrets") {
        alert("You have successfully logged in.");
        location.replace("Welcome Page.html");
    } else {
        loginErrorMessage.style.opacity = 1;
    }
})