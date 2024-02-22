function validateSignUp() {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("Cpassword").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    if (username == "" || password == "" || confirmPassword == "" || email == "" || age == "") {
        alert("Input field should not be empty.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Invalid password. Please ensure it meets all the requirements.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email. Please enter a valid email address.");
        return false;
    }

    if (!validateAge(age)) {
        alert("Invalid age. Please enter a valid age.");
        return false;
    }

    alert("Sign-Up Successful!");
    return true;
}

function validatePassword(password) {
    var lengthCheck = /.{8,}/; 
    var uppercaseCheck = /[A-Z]/; 
    var lowercaseCheck = /[a-z]/; 
    var numberCheck = /[0-9]/; 
    var specialCheck = /[!@#$%^&*]/; 

    if (!lengthCheck.test(password) || !uppercaseCheck.test(password) || !lowercaseCheck.test(password) || !numberCheck.test(password) || !specialCheck.test(password)) {
        return false;
    }

    return true;
}

function validateEmail(email) {
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailCheck.test(email)) {
        return false;
    }

    return true;
}

function validateAge(age) {
    if (isNaN(age) || age < 1 || age > 120) {
        return false;
    }

    return true;
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var confirmPasswordField = document.getElementById("Cpassword");
    var showPasswordsCheckbox = document.getElementById("showPassword");

    if (showPasswordsCheckbox.checked) {
        passwordField.type = "text";
        confirmPasswordField.type = "text";
    } else {
        passwordField.type = "password";
        confirmPasswordField.type = "password";
    }
}
