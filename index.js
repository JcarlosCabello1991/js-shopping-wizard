let currentPage = 'product';
const arrayPrefix = [376,34,33,49,30];
// Get color elements from product page, product details.
const colorElements = document.querySelectorAll('.variants-color');

// Add event listener to each color option on product page, product details.
colorElements.forEach(color => {
    color.addEventListener('click', function (e) {
        selectColor(e);
    })
})

// Change main product picture and thumbnails for color selection in product details.
function selectColor(e) {
    const mainProductDiv = document.querySelector('.main-product');
    const smallImgs = document.querySelectorAll('.thumbnail-product');
    const pic = document.querySelector('.pic-main-product');
    pic.src = e.target.src;

    smallImgs.forEach(img => {
        img.src = e.target.src;
    })
};

document.getElementById("btn-buy").addEventListener("click", toProfile);

function toProfile(){
    document.getElementsByClassName("logo").item(0).style.display = "none";
    document.getElementsByClassName("user-journey").item(0).style.display = "grid";
    document.getElementsByClassName("container-product").item(0).style.display = "none";
    document.getElementsByClassName("container-profile").item(0).style.display = "flex";
    document.getElementsByClassName("footer-text").item(0).style.display = "none";
    document.getElementsByClassName("buttons-form-profile").item(0).style.display = "flex";
    document.getElementsByClassName("step-journey-circle").item(0).style.backgroundColor = "black";
    currentPage = 'profile';
}

/*VALIDATION OF USERNAME
SET TO HIDDEN AND VISIBLE THE SPAN ERROR MESSAGE
FOCUS DE USERNAME AND EMAIL*/

const userNameMsg = document.querySelector('#userName + span');
let userName = document.getElementById("userName");
userName.addEventListener("click", focusUserName);
let flag = 0;

function focusUserName(){
    userName.value = "";
    userName.focus();
    if(userNameMsg.matches(".profile-error")){
        userNameMsg.classList.remove("profile-error");
        userNameMsg.textContent = "";
        flag = 0;
    }
}

const emailMsg = document.querySelector('#email + span');
let userEmail = document.getElementById("email");
userEmail.addEventListener("click", checkUserName);

function checkUserName(){
    userEmail.focus();
    const strRegex = /\s/;
    if(emailMsg.matches(".profile-error")){
        emailMsg.classList.remove("profile-error");
        emailMsg.textContent = "";
        flag = 0;
    }
    if(userName.value.length < 5 || userName.value.length > 20 || strRegex.test(userName.value)){
        userNameMsg.textContent = "cannot be empty, 5 to 20 characters without white spaces.";
        userNameMsg.classList.add('profile-error');
        flag = 1;
    }
}

const pwMsg = document.querySelector('#password + span');
let pwd = document.getElementById("password");
pwd.addEventListener("click", checkEmail);

function checkEmail(){
    pwd.focus();
    const strRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if(pwMsg.matches(".profile-error")){
        pwMsg.classList.remove("profile-error");
        pwMsg.textContent = "";
        flag = 0;
    }
    if(userEmail.value.length > 50 || userEmail.value.length < 4 || !strRegex.test(userEmail.value)){
        emailMsg.textContent = "Email is to short or is empty";
        emailMsg.classList.add('profile-error');
        flag = 1;
    }
}

const pwConfirmMsg = document.querySelector('#pwConfirm + span');
let confirmPwd = document.getElementById("pwConfirm");
confirmPwd.addEventListener("click", checkPassword);

function checkPassword(){
    confirmPwd.focus();
    const strRegex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/;
    if(pwConfirmMsg.matches(".profile-error")){
        pwConfirmMsg.classList.remove("profile-error");
        pwConfirmMsg.textContent = "";
        flag = 0;
    }
    console.log(pwd.value + " " + strRegex.test(pwd.value))
    if(pwd.value.length > 20 || pwd.value.length < 8 || !strRegex.test(pwd.value)){
        pwMsg.textContent = "Error does not meet password requirements";
        pwMsg.classList.add('profile-error');
        flag = 1;
    }
}

let btnNext = document.getElementById("nextButton");
btnNext.addEventListener("click", checkConfirmPassword);

function checkConfirmPassword(){
    
    if(confirmPwd.value === pwd.value && flag == 0 && pwd.value != "" && currentPage == 'profile'){
        /*Hide the current screen and display the next one*/
        flag = 0;
        const addr = document.getElementsByClassName("container-address").item(0);
        addr.style.display = "flex";
        document.getElementsByClassName("container-profile").item(0).style.display = "none";
        document.getElementsByClassName("step-journey-circle").item(1).style.backgroundColor = "black";
        document.getElementsByTagName("main").item(0).style.height = "70vh";
        currentPage = 'address';
    }else if (currentPage ==  1 && document.getElementsByClassName("container-profile").item(0).style.display != "none"){
        checkUserName();
        checkEmail();
        checkPassword();
        if(confirmPwd.value == "" || confirmPwd.value != pwd.value){
            pwConfirmMsg.textContent = "Error does not meet password requirements";
            pwConfirmMsg.classList.add('profile-error');
            flag = 1;
        }
    }else if(currentPage == 'address'){ //Shows the page Shipping
    
        if(checkAddress() == false){
            //mensajes de error
            //alert("Some field is wrong!!")
        }else{
            //ocultamos esta pagina y hacemos visible la siguiente
            document.getElementsByClassName("container-address").item(0).style.display="none";
            document.getElementsByClassName("container-shipping").item(0).style.display="flex";
            document.getElementsByClassName("step-journey-circle").item(2).style.backgroundColor = "black";
            currentPage = 'shipping'
        }
    }
}






function checkAddress(){
    /*if(document.getElementById("firstName").value.length > 20 || document.getElementById("firstName").value == ""){
        return false;
    }else if(document.getElementById("lastName").value.length > 20 || document.getElementById("lastName").value == ""){
        return false;
    }else if(document.getElementById("dateOfBirth").value == "" || !(/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/).test(document.getElementById("dateOfBirth").value)){
        return false;
    }else if(document.getElementById("address1").value == "" || document.getElementById("address1").value.length > 50){
        return false;
    }else if(document.getElementById("address2").value != "" || document.getElementById("address2").value.length > 50){
        return false;
    }else if(document.getElementById("postCode").value == "" || document.getElementById("postCode").value.length > 5){
        return false;
    }else if(document.getElementById('phone').value.split(" ")[1].length > 9){
        return false;    }*/

    return true;
}


// Address page, country select
const prefixes = document.getElementById('phone-prefix');
const inputPhone = document.getElementById('phone');
inputPhone.value = '+376 ';

prefixes.addEventListener('change', function (e) {

    switch (e.target.value) {
        case 'and':
            inputPhone.value = '+376 ';
            break;
        case 'esp':
            inputPhone.value = '+34 ';
            break;
        case 'fra':
            inputPhone.value = '+33 ';
            break;
        case 'deu':
            inputPhone.value = '+49 ';
            break;
        case 'grc':
            inputPhone.value = '+30 ';
            break;
        default:
            break;
    }
});

/*CLEAR FORM*/
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearForm);

function clearForm(){
    const containerProfile = document.querySelector(".container-profile");
    const containerAddress = document.querySelector(".container-address");

    if(containerProfile.style.display == "flex"){
        const formContainer = document.querySelector(".form-container");
        const inputElements = formContainer.querySelectorAll("input");
        const spanElements = formContainer.querySelectorAll("span");

        inputElements.forEach(element => element.value = "")
        spanElements.forEach(element => {
            element.textContent = "";
            if(element.matches(".profile-error")){
                element.classList.remove("profile-error");
            }
        });
    }if(containerAddress.style.display == "flex"){
        const formContainer = containerAddress.querySelector(".form-container");
        const inputElements = formContainer.querySelectorAll("input");
        inputElements.forEach(element => element.value = "");
        inputPhone.value = '+376 ';
    }
}
