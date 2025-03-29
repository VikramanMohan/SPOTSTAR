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
        y.style.right = "-580px";
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

       // Login Validation in the Spotstar

   function LoginValidation() {
    // Mock database for demonstration
    var db = [
        {'USERNAME': 'VIKRAMAN', 'EMAIL': 'vikramvk@gmail.com', 'PASSWORD': 'vikram@2002'},
        {'USERNAME': 'VIJAY', 'EMAIL': 'vijay@gmail.com', 'PASSWORD': 'vijay@2002'},
        {'USERNAME': 'RAJINI', 'EMAIL': 'rajini@gmail.com', 'PASSWORD': 'rajini@2002'},
        {'USERNAME': 'KAMAL', 'EMAIL': 'kamal@gmail.com', 'PASSWORD': 'kamal@2002'}
    ];

    // Retrieve the user input values
    var userInput = document.getElementById("user").value;
    var passwordInput = document.getElementById("pass").value;
    var flag = false;

    // Loop through the database to find a matching user
    for (var i = 0; i < db.length; i++) {
        if ((db[i]['USERNAME'] === userInput || db[i]['EMAIL'] === userInput) && db[i]['PASSWORD'] === passwordInput) {
            flag = true;
            break;
        }
    }

    // Conditional redirection or error message
    if (flag) {
        window.location.href = "../HTML/Homepage.html";
    } else {
        document.getElementById("error").innerHTML = "Invalid Username or Password";
    }
}

function SignUpValidation(event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("mail").value.trim();
    const password = document.getElementById("register-pass").value.trim();
    const confirmPassword = document.getElementById("register-confirm").value.trim();

    const phoneFlag = /^[6-9]\d{9}$/.test(phone);
    const emailFlag = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    const passwordFlag = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);
    const confirmFlag = password === confirmPassword;

    let errorMessage = "";
    if (!phoneFlag) errorMessage += "• Phone number must be 10 digits starting with 6-9.<br>";
    if (!emailFlag) errorMessage += "• Invalid email format.<br>";
    if (!passwordFlag) errorMessage += "• Password must be 8-16 characters with uppercase, lowercase, number, and special character.<br>";
    if (!confirmFlag) errorMessage += "• Passwords do not match.<br>";

    if (errorMessage === "") {
        window.location.href = "./HTML/OtpVerify.html";
        console.log(SignUpValidation());
    } else {
        document.getElementById("error").innerHTML = errorMessage;
        document.getElementById("error").style.color = "red";
    }
}
