// Function to validate the sign-in form
function validateSignIn() {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username or password fields are empty
    if (username == "" || password == "") {
        alert("Input field should not be empty.");
        return false;
    }

    // Check if password is valid
    if (!validatePassword(password)) {
        alert("Invalid password. Please ensure it meets all the requirements.");
        return false;
    }

    alert("Sign-In Successful!");
    return true;
}

function validatePassword(password) {
    // Regular expressions for password checks
    var lengthCheck = /.{8,}/; 
    var uppercaseCheck = /[A-Z]/; 
    var lowercaseCheck = /[a-z]/; 
    var numberCheck = /[0-9]/; 
    var specialCheck = /[!@#$%^&*]/; 

    // Validate password against all checks
    if (!lengthCheck.test(password) || !uppercaseCheck.test(password) || !lowercaseCheck.test(password) || !numberCheck.test(password) || !specialCheck.test(password)) {
        return false;
    }

    return true;
}


function togglePasswordVisibilitySignIn() {
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        // If the checkbox is checked, show the password
        passwordField.type = "text";
    } else {
        // If the checkbox is unchecked, hide the password
        passwordField.type = "password";
    }
}

function togglePasswordVisibilitySignUp() {
    var passwordField = document.getElementById("password");
    var CpasswordField = document.getElementById("Cpassword");
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        // If the checkbox is checked, show the password
        passwordField.type = "text";
        CpasswordField.type = "text";
    } else {
        // If the checkbox is unchecked, hide the password
        passwordField.type = "password";
        CpasswordField.type = "password";
    }
}

