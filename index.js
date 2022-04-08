
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

function selectColor (e) {
    console.log(e)
}
    smallImgs.forEach(img => {
        img.src = e.target.src;
    })
};

document.getElementById("btn-buy").addEventListener("click", toProfile);

function toProfile(){
    console.log("clickando");
    document.getElementsByClassName("logo").item(0).style.visibility = "hidden";
    document.getElementsByClassName("user-journey").item(0).style.visibility = "visible";
}
