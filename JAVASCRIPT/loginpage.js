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
        window.location.href = "./HTML/OtpVerify.html";
    } else {
        let errorMessage = "Invalid Details:";
        if (!phoneFlag) {
            errorMessage += " Phone number is invalid.";
        }
        if (!emailFlag) {
            errorMessage += " Email is invalid.";
        }
        if (!passwordFlag) {
            errorMessage += " Password is weak.";
        }
        if (!confirmFlag) {
            errorMessage += " Passwords do not match.";
        }
        document.getElementById("error").innerHTML = errorMessage;
    }
}

function alertOf(){
    alert('Login First')
}