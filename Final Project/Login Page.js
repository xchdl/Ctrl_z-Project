const form = document.getElementById('login-form');
const username = document.getElementById('username-field');
const password = document.getElementById('password-field');
const loginErrorMessage = document.getElementById('Invalid-message');

function showError(input, message){
    input.className = 'input error';
    const small = input.nextElementSibling;
    small.innerText=message;
}

function showSuccess(input){
    input.className = 'input success';
}

function checkLogin(e) {
    e.preventDefault();
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username.value === savedUsername && password.value === savedPassword) {
        window.location.href = "Welcome Page.html";
    } else {
        showError(username, "Invalid username or password");
        showError(password, "Invalid username or password");
    }
}

form.addEventListener('submit', checkLogin);