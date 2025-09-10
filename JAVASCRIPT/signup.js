function SignUpValidation(event) {
    // Prevent form submission
    if (event) event.preventDefault();

    // Get form values
    const firstName = document.getElementById("first").value.trim();
    const lastName = document.getElementById("last").value.trim();
    const email = document.getElementById("mail").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("confirm").value.trim();
    const errorElement = document.getElementById("register-error");

    // Clear previous errors
    if (errorElement) errorElement.textContent = "";

    // Validation rules
    if (!firstName) {
        if (errorElement) errorElement.textContent = "Firstname is required.";
        return;
    }
    if (!lastName) {
        if (errorElement) errorElement.textContent = "Lastname is required.";
        return;
    }
    if (!email) {
        if (errorElement) errorElement.textContent = "Email is required.";
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        if (errorElement) errorElement.textContent = "Please enter a valid email.";
        return;
    }
    if (!phone) {
        if (errorElement) errorElement.textContent = "Phone number is required.";
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        if (errorElement) errorElement.textContent = "Please enter a valid 10-digit phone number.";
        return;
    }
    if (!password) {
        if (errorElement) errorElement.textContent = "Password is required.";
        return;
    }
    if (password.length < 6) {
        if (errorElement) errorElement.textContent = "Password must be at least 6 characters long.";
        return;
    }
    if (!confirmPassword) {
        if (errorElement) errorElement.textContent = "Please confirm your password.";
        return;
    }
    if (password !== confirmPassword) {
        if (errorElement) errorElement.textContent = "Passwords do not match.";
        return;
    }

    // If all validations pass
    if (errorElement) {
        errorElement.style.color = "green";
        errorElement.textContent = "Registration successful! Redirecting...";
    }

    // Redirect to another page after a short delay
    setTimeout(() => {
        window.location.href = "../HTML/OtpVerify.html"; // Replace with the target page URL
    }, 2000); // 2-second delay
}

// Attach the validation function to the form submit event (if applicable)
document.querySelector('form').addEventListener('submit', SignUpValidation);
