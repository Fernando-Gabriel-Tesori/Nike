const body = document.querySelector('body');
const tenis = document.querySelector('.tenis');
const button = document.querySelector('a');

function changeColor(color, image, buttonCollor) {
    body.style.backgroundColor = color;
    tenis.src = image;
    button.style.backgroundColor = buttonCollor;
}