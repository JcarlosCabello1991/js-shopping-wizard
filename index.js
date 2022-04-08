
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