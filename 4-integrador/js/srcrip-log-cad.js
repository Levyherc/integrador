
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

/* Mensagem de erro */

document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");

    function login() {
        loginForm.style.left = "4px";
        registerForm.style.right = "-520px";
        loginBtn.className += " white-btn";
        registerBtn.className = "btn";
        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;
    }

    function register() {
        loginForm.style.left = "-510px";
        registerForm.style.right = "5px";
        loginBtn.className = "btn";
        registerBtn.className += " white-btn";
        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;
    }

    loginBtn.addEventListener("click", login);
    registerBtn.addEventListener("click", register);

    function validateEmail(emailField) {
        if (!emailField.value.includes("@")) {
            alert("O campo de e-mail deve conter um '@'.");
            return false;
        }
        return true;
    }

    document.querySelectorAll(".submit").forEach(button => {
        button.addEventListener("click", function(event) {
            const emailField = this.closest(".form-box").querySelector("input[type='text'][placeholder='Email']");
            if (!validateEmail(emailField)) {
                event.preventDefault();
            }
        });
    });
});
