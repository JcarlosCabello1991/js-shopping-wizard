const colorElements = document.querySelectorAll('.variants-color');
console.log(colorElements)

colorElements.forEach((color) => function () {
    color.addEventListener('click', selectColor(e))
})

addEventListener('click', selectColor);


function selectColor (e) {
    console.log(e)
}