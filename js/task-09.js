function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



console.log(getRandomHexColor());
const buttonRef = document.querySelector('.change-color');
const span = document.querySelector('.color');

buttonRef.addEventListener("click", onButtonChangeColor);
function onButtonChangeColor() {
document.body.style.backgroundColor = getRandomHexColor();
span.textContent = getRandomHexColor();
}