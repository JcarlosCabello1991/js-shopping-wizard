
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
    document.getElementsByClassName("logo").item(0).style.visibility = "hidden";
    document.getElementsByClassName("user-journey").item(0).style.visibility = "visible";
    document.getElementsByClassName("container-product").item(0).style.visibility = "hidden";
    document.getElementsByClassName("container-profile").item(0).style.visibility = "visible";
    document.getElementsByClassName("footer-text").item(0).style.visibility = "hidden";
    document.getElementsByClassName("buttons-form-profile").item(0).style.visibility = "visible";
    document.getElementsByClassName("step-journey-circle").item(0).style.backgroundColor = "black";
}


// Functions for profile page
const nextBtn = document.getElementById('nextButton');
nextBtn.addEventListener('click', checkInputs);

// Function check inputs on profile page for any value. 
function checkInputs () {
    const userName = document.getElementById('userName').value;
    const pw = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const pwConfirm = document.getElementById('pwConfirm').value;

    if (!userName) {
        const userNameMsg = document.querySelector('#userName + span');
        userNameMsg.textContent = 'Username cannot be empty.';
        userNameMsg.classList.add('profile-error');
    }
    if (!email) {
        const emailMsg = document.querySelector('#email + span');
        emailMsg.textContent = 'Email cannot be empty.';
        emailMsg.classList.add('profile-error');
    }
    if (!pw)  {
        const pwMsg = document.querySelector('#password + span');
        pwMsg.textContent = 'Password cannot be empty.';
        pwMsg.classList.add('profile-error');
    }
    if (!pwConfirm) {
       const pwConfirmMsg = document.querySelector('#pwConfirm + span');
       pwConfirmMsg.textContent = 'Please confirm your password.'
       pwConfirmMsg.classList.add('profile-error');
    }
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

let userEmail = document.getElementById("email");
userEmail.addEventListener("click", checkUserName);

function checkUserName(){
    userEmail.focus();
    const strRegex = /\s/;
    if(userName.value.length <= 5 || userName.value.length >= 20 || strRegex.test(userName.value)){
        userNameMsg.textContent = "cannot be empty, 5 to 20 characters without white spaces.";
        userNameMsg.classList.add('profile-error');
        flag = 1;
    }
}

/*The flag variable will be used to
deny the access to the following screen
because there are some input fields to
correct their values, only when flag will be 0
the user could be go the next screen, the flag will be 
validated when the user click on the next button*/

