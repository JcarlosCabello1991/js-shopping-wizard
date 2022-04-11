
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
    console.log('hola');
    document.getElementsByClassName("logo").item(0).style.display = "none";
    document.getElementsByClassName("user-journey").item(0).style.display = "grid";
    document.getElementsByClassName("container-product").item(0).style.display = "none";
    document.getElementsByClassName("container-profile").item(0).style.display = "flex";
    document.getElementsByClassName("footer-text").item(0).style.display = "none";
    document.getElementsByClassName("buttons-form-profile").item(0).style.display = "flex";
    document.getElementsByClassName("step-journey-circle").item(0).style.backgroundColor = "black";
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
    /*if(confirmPwd.value === pwd.value && flag == 0 && pwd.value != ""){*/
        /*Hide the current screen and display the next one*/
        const addr = document.getElementsByClassName("container-address").item(0);
        addr.style.display = "flex";
        document.getElementsByClassName("container-profile").item(0).style.display = "none";
        document.getElementsByClassName("step-journey-circle").item(1).style.backgroundColor = "black";
        document.getElementsByTagName("main").item(0).style.height = "100vh";
    //}
}

/*CLEAR FORM*/

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearForm);

function clearForm(){
    const containerProfile = document.querySelector(".container-profile");
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
    }
}

