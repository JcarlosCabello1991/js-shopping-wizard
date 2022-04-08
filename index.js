const colorElements = document.querySelectorAll('.variants-color');
console.log(colorElements)

colorElements.forEach((color) => function () {
    color.addEventListener('click', selectColor(e))
})

addEventListener('click', selectColor);


function selectColor (e) {
    console.log(e)
}

document.getElementById("btn-buy").addEventListener("click", toProfile);

function toProfile(){
    console.log("clickando");
    document.getElementsByClassName("logo").item(0).style.visibility = "hidden";
    document.getElementsByClassName("user-journey").item(0).style.visibility = "visible";
}