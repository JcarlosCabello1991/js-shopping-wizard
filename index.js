
// Get color elements from product page, product details.
const colorElements = document.querySelectorAll('.variants-color');

// Add event listener to each color option on product page, product details.
colorElements.forEach(color => {
    color.addEventListener('click', function (e) {
        selectColor(e);
    })
})

<<<<<<< HEAD
// Change main product picture and thumbnails for color selection in product details.
function selectColor(e) {
    const mainProductDiv = document.querySelector('.main-product');
    const smallImgs = document.querySelectorAll('.thumbnail-product');
    const pic = document.querySelector('.pic-main-product');
    pic.src = e.target.src;

=======

// Change main product picture and thumbnails for color selection in product details.
function selectColor(e) {
    const mainProductDiv = document.querySelector('.main-product');
    const smallImgs = document.querySelectorAll('.thumbnail-product');    
    const pic = document.querySelector('.pic-main-product');
    pic.src = e.target.src;

function selectColor (e) {
    console.log(e)
}
>>>>>>> 8e8c26fc5d9db37a168bb016a1000919bc19cfae
    smallImgs.forEach(img => {
        img.src = e.target.src;
    })
};

document.getElementById("btn-buy").addEventListener("click", toProfile);

function toProfile(){
<<<<<<< HEAD
    console.log("clickando");
    document.getElementsByClassName("logo").item(0).style.visibility = "hidden";
    document.getElementsByClassName("user-journey").item(0).style.visibility = "visible";
=======
    document.getElementsByClassName("logo").item(0).style.visibility = "hidden";
    document.getElementsByClassName("user-journey").item(0).style.visibility = "visible";
    document.getElementsByClassName("container-product").item(0).style.visibility = "hidden";
    document.getElementsByClassName("container-profile").item(0).style.visibility = "visible";
    document.getElementsByClassName("footer-text").item(0).style.visibility = "hidden";
    document.getElementsByClassName("buttons-form-profile").item(0).style.visibility = "visible";
    document.getElementsByClassName("step-journey-circle").item(0).style.backgroundColor = "black";
>>>>>>> 8e8c26fc5d9db37a168bb016a1000919bc19cfae
}
