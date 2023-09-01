// Генерируем случайный цвет
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// Определеяем елементы из DOM
const buttonRef = document.querySelector('[data-create]');
const divRef = document.querySelector('#boxes');
const deleteButtonRef = document.querySelector('[data-destroy]');


// Регистрируем событие клик на кнопку создать елемент
buttonRef.addEventListener('click', createBoxesAmount);
// Регистрируем событие клик на кнопку удалить
deleteButtonRef.addEventListener('click', destroyOnclick)


// Функция удаляет значения из блока #boxes
function destroyBoxes() {
    divRef.innerHTML = '';
}


// Обьявляем функцию которая будет генерировать блоки
function createBoxesAmount(event) {

//   Обьявляем переменную которая будет содержать в себе значение инпута
    const value = event.currentTarget.previousSibling.previousSibling.value
    let arrayDivs = [];

// Определяем переменные которые будут содержать значения width , height
    let countWidth = 30;
    let countHeight = 30;

// Запускаем итериуемый цикл для создания требуемого массива из количества value
    for (let i = 0; i < value; i += 1) {
        let createdDiv = document.createElement('div')
        createdDiv.style.height = countHeight + 'px';
        createdDiv.style.width = countWidth + 'px';
        createdDiv.className = 'box__new-element';

        // Получаем случайное значение цвета
        createdDiv.style.backgroundColor = getRandomHexColor();
        // Увеличиваем значение величины width , heigth для следующей итерации
        countWidth += 10;
        countHeight += 10;

        // Добавляем полученный елемент в массив
        arrayDivs.push(createdDiv);
    }
// Распыляем полученный массив
    divRef.append(...arrayDivs);
}

