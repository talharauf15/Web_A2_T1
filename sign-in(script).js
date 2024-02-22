function validateSignIn() {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Input field should not be empty.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Invalid password. Please ensure it meets all the requirements.");
        return false;
    }

    alert("Sign-In Successful!");
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


function togglePasswordVisibilitySignIn() {
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}



