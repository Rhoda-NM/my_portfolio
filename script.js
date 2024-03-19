const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    let phone = document.getElementById("contact-phone").value;

    if(phone.length ==0) {
        phoneError.innerHTML = "Phone.no is required";
        return false;
    }
    if(phone.length !==  10) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits please";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;
    
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.[a-z]{2,4}$/)) {
        emailError.innerHTML ="Enter correct email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    let message = document.getElementById('contact-message').value;
    let requiredVal = 20;
    let remaining = requiredVal - message.length;
    
    if (remaining > 0){
        messageError.innerHTML = remaining + "More characters required";
        return false;
    }
    
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() ||validateMessage()){
        submitError.innerHTML = 'Please fill in the required fields';
        return false;
    }

}