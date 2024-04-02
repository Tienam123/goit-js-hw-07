const buttonRef = document.querySelector('.change-color');
const span = document.querySelector('.color');

buttonRef.addEventListener('click', onButtonChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function onButtonChangeColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  span.textContent = currentColor;
}

