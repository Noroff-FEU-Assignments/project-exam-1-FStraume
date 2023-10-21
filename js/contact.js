const form = document.querySelector("#contactform");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


    function formValidation () {

        event.preventDefault();
    
    
        if (checkLength(name.value, 5) === true){
            nameError.style.display = "none";
            console.log(name.value)
        }
        else {
            nameError.style.display = "block";
        } 
    
        if(emailValidation(email.value) === true) {
            emailError.style.display = "none";
        }
        else {
            emailError.style.display = "block";
        }

        if(checkLength(subject.value, 15) === true) {
            subjectError.style.display = "none";
        }
        else {
            subjectError.style.display = "block";
        }

        if (checkLength(message.value, 25) === true){
            messageError.style.display = "none";
        }
        else {
            messageError.style.display = "block";
        }
        
        if (checkLength(name.value, 5) & checkLength(subject.value, 15) & checkLength(message.value, 25) & emailValidation(email.value) === true) {
            console.log("success")
            window.location.href = "contactSuc.html";
        }
    }
    
    form.addEventListener("submit", formValidation);
    
    function checkLength(value, length) {
        if (value.trim().length > length) {
            return true;
        }
        else {
            return false;
        }
    }
    
    function emailValidation (email) {
        const sym = /\S+@\S+\.\S+/;
        const pattern = sym.test(email);
        return pattern;
    }



