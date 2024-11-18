function SignUpValidation() {
    // Phone Number Validation
    const phone = document.getElementById("phone").value;
    const phoneFlag = (phone >= 6000000000 && phone <= 9999999999);

    // Email Validation
    const email = document.getElementById("mail").value;
    const emailFlag = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);

    // Password Validation
    const password = document.getElementById("pass").value;
    const passwordFlag = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);

    // Confirm Password Validation
    const reEnteredPassword = document.getElementById("confirm").value;
    const confirmFlag = (password === reEnteredPassword);

    // Final Validation
    if (phoneFlag && emailFlag && passwordFlag && confirmFlag) {
        window.location.href = "../HTML/OtpVerify.html";
    } else {
        document.getElementById("error").innerHTML = "Invalid Details";
    }
}
