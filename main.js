javascript
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Here, you can perform form validation and registration logic

    // Example: Display a confirmation message
    alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}`);
});
