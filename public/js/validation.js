
let email = document.getElementById("emailId");
let error = document.getElementById("error");
let phonenum = document.getElementById("phoneNumber");
let pherror = document.getElementById("error2");
let emailnav = document.getElementById("emailNav");
let erroremailnav = document.getElementById("errorEmailNav");
let password = document.getElementById("password");
let passerror = document.getElementById("passwordError");
let confirmpwd = document.getElementById("confirmPassword");
let conpwderror = document.getElementById("error3");
let pwdnav = document.getElementById("passwordNav");
let pwdnaverror = document.getElementById("errorPasswordNav");
function validateEmail(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/g;
    if(regexp.test(email.value)){
        error.innerHTML ="";
        error.style.color ="green";
        email.style.border="1px solid green";
        error.style.fontWeight ="thin";
        return true;
    }
    else if(email.value==""){
        error.innerHTML ="Please type your Email adrress";
        error.style.color ="red";
        error.style.fontWeight ="thin";
        email.style.border ="1px solid red";
        return false;
    }
    else{
        error.innerHTML = "Please provide a valid email address!";
        error.style.color ="red";
        error.style.fontWeight ="thin";
        email.style.border ="1px solid red";
        return false;
    }
}
function validatephonenumber() {
    let regexpph =/^\(?[0-9]{3}\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexpph.test(phonenum.value)){
        pherror.innerHTML ="";
        phonenum.style.border ="1px solid green";
        return true;
    }
    else if(phonenum.value==""){
        pherror.innerHTML ="Please type you Phone number";
        pherror.style.color ="red";
        pherror.style.fontWeight ="thin";
        phonenum.style.border ="1px solid red";
        return false;

    }
    else{
        pherror.innerHTML ="Please provide a valid phone address!";
        pherror.style.color ="red";
        pherror.style.fontWeight ="thin";
        phonenum.style.border ="1px solid red";
        return false;
    }
}

function  passwordChanged(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");
    if(password.value== ""){
        passerror.innerHTML ="Type password";
        password.style.border="1px solid red";
        passerror.style.color="red";   
    }
   else if(false == enoughRegex.test(password.value)){
     passerror.innerHTML="More character";
     passerror.style.color="black";
     password.style.border="2px solid black";
   }
   else if(strongRegex.test(password.value)){
       passerror.innerHTML="Looks Strong";
       passerror.style.color="green";
       password.style.border="2px solid green"
       return true;
   }
   else if(mediumRegex.test(password.value)){
       passerror.innerHTML="Medium";
       passerror.style.color="orange";
       password.style.border="2px solid orange";
       return false;
   }
   else{
       passerror.innerHTML="Oops it s weak!";
       passerror.style.color="red";
       password.style.border="2px solid red";
       return false;
   }
   
    
}
function confirmPasswordValidation(){
    if(password.value==confirmpwd.value){
        return true;
    }
    else if(confirmpwd.value==""){
        conpwderror.innerHTML="Please confirm your Password ";
        confirmpwd.style.border="1px solid red";
        conpwderror.style.color="red";
    }
    else{
        conpwderror.innerHTML="Passwords must be same";
        conpwderror.style.color="red";
        confirmpwd.style.border="2px solid red";
        return false;
    }
}
function  validateEmailNav(){
    let regexpemail =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/g;
    if(regexpemail.test(emailnav.value)){
        erroremailnav.innerHTML ="";
        emailnav.style.border="1px solid green";
        return true;
    }
    else if(emailnav.value==""){
        erroremailnav.innerHTML ="Please type your Email address";
        erroremailnav.style.color ="red";
        emailnav.style.border ="1px solid red";
        return false;
    }
    else{
        erroremailnav.innerHTML ="Please provide valid Email address!";
        erroremailnav.style.color ="red";
        emailnav.style.border ="1px solid red";
        return false;
    }
}
function validatePasswordNav(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    if(strongRegex.test(pwdnav.value)){
        pwdnav.style.border="1px solid green";
        return true;
    }
    else if(pwdnav.value==""){
        pwdnaverror.innerHTML="Type Password";
        pwdnav.style.border="1px solid red";
        pwdnaverror.style.color="red";
        return false;
    }
    else{
        pwdnaverror.innerHTML="Wrong Password";
        pwdnaverror.style.color="red";
        pwdnav.style.border="1px solid red";
        return false;
    }
}