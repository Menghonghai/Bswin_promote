// Select elements
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");

// Toggle Forms
loginBtn.onclick = () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
};

registerBtn.onclick = () => {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
};
