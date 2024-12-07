function showAccountButton() {
    const REGISTER_BUTTON = document.getElementById("register-button");
    const ACCOUNT_BUTTON = document.getElementById("account-button");
    
    REGISTER_BUTTON.style.display = "none"; 
    ACCOUNT_BUTTON.style.display = "block";
    
}

function showRegisterButton() {
    const REGISTER_BUTTON = document.getElementById("register-button");
    const ACCOUNT_BUTTON = document.getElementById("account-button");
    
    ACCOUNT_BUTTON.style.display = "none"; // Oculta "Mi Cuenta"
    REGISTER_BUTTON.style.display = "block"; // Muestra "Registrarse"
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("email") ? true : false;
    
    if (isLoggedIn) {
        showAccountButton(); 
    } else {
        showRegisterButton();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    checkLoginStatus();
});