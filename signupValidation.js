document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    let valid = true;

    // Validate Email
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        valid = false;
    }

    // Validate Username
    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        valid = false;
    }

    // Validate Password
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
        valid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        valid = false;
    }
    if (valid) {
        alert("Sign-up successful!");
    }
});
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
}
