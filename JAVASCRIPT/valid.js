function PasswordValidation() {
    var Password =document.getElementById("pass").value 
    var upper=0
    var lower=0
    var num=0
    var spe=0
    for(var i=0;i<Password.length;i++){
        if((Password[i]>='A')&&(Password[i]<='Z')){
            upper++
        }
        else if((Password[i]>='a')&&(Password[i]<='z')){
            lower++
        }
        else if((Password[i]>='0')&&(Password[i]<='9')){
            num++
        }
        else{
            spe++
        }
    }
    if((Password.length>=8)&&(Password.length<=16)&&(upper==1)&&(lower==1)&&(num==1)&&(spe==1)){
        console.log("Strong Password")
    }
    else{
        console.log("Weak Password")
    }
}
var GeneratedOTP=Math.floor(Math.random()*999999)
alert(GeneratedOTP)
function OTPVerification(){
    var EnteredOTP=document.getElementById("otp").value 
    if(GeneratedOTP==EnteredOTP){
        window.location.href="./Welcome.html"
    }else{
        document.getElementById("error").innerHTML="Incorrect OTP"
    }
}
function ResendOTP(){
    window.location.href="./OtpVerify.html"
}

