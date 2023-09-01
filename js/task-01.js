// Определяем ссылку на блок ul#categories
const listEl = document.querySelector("#categories");
l
// Задание №1 Определяем количество категорий и выводим в консоль
const arrayFromList = listEl.children;
console.log("Number of Categories: ", arrayFromList.length);

// Задание 2 Получить доспуп к контенту каждого заголовка и вывести в консоль заголовок
// и количество вложеных елементов

const liEl = document.querySelectorAll(".item");
//Перебираем полученную коллекцию с помощью метода forEach
liEl.forEach((el) => {
  // Определяем контент с помощью textContent
  console.log("Categories: ", el.firstElementChild.textContent);
  // Инициализируем коллекцию через следующего ребенка и получаем колекцию его детей
  // Определяем длинну полученого массива
  console.log(
    "Elements: ",
    el.firstElementChild.nextElementSibling.children.length
  );
});
