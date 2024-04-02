const createButton = document.querySelector('[data-create]');
const boxContainer = document.querySelector('#boxes');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', getValueInput);
destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}

function getValueInput(event) {
  const value = event.currentTarget.previousSibling.previousSibling.value.trim();
  if (value <= 0 || value > 100) {
    alert('Число не может быть меньше 1 и больше 100');
    return;
  }
  createBoxesAmount(value);
}

function createBoxesAmount(amount) {
  let arrayDivs = [];
  boxContainer.innerHTML = '';
  let countWidth = 30;
  let countHeight = 30;
  const BASE_INCREMENT = 10;
  for (let i = 0; i < amount; i += 1) {
    let createdDiv = document.createElement('div');
    createdDiv.style.height = countHeight + 'px';
    createdDiv.style.width = countWidth + 'px';
    createdDiv.className = 'box__new-element';

    createdDiv.style.backgroundColor = getRandomHexColor();
    countWidth += BASE_INCREMENT;
    countHeight += BASE_INCREMENT;

    arrayDivs.push(createdDiv);
  }
  boxContainer.append(...arrayDivs);
}
  
  


