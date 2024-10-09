document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Clear previous error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let valid = true;
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        valid = false;
    }

    // Validate Password
    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
    }
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
}
