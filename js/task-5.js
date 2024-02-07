function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector('.change-color');
const span = document.querySelector('.color');

// Добавляем слушатель события на кнопку
buttonRef.addEventListener("click", onButtonChangeColor);

// Инициализируем функцию для смены цвета
function onButtonChangeColor() {
document.body.style.backgroundColor = getRandomHexColor();
span.textContent = getRandomHexColor();
}