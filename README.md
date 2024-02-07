# Критерии приема

 - Создан репозиторий goit-js-hw-07.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.
- Задания выполнены строго по ТЗ (нельзя изменять исходный HTML задания).
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Имена переменных и функций понятные, описательные.
- Код отформатирован Prettier.
---
## Задание 1

В HTML есть список категорий `ul#categories`.
```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```
`Напиши скрипт который:`

- Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
- Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега `<h2>`) и количество элементов в категории (всех вложенных в него `<li>`).

Для выполнения этой задачи нужно использовать метод `forEach()` и свойства навигации по DOM.

В результате, в консоли будут выведены такие сообщения.

- `Number of categories: 3`
- `Category: Animals Elements: 4`
- `Category: Products Elements: 3`
- `Category: Technologies Elements: 5`

---

## Задание 2

- Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.`<ul class="gallery"></ul>`

- Используй массив объектов images для создания элементов `<img>` вложенных в` <li>`. Для создания разметки используй шаблонные строки и метод `insertAdjacentHTML()`.
- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
- Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
```angularjs
const images = [
{
url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
alt: "White and Black Long Fur Cat",
},
{
url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
alt: "Orange and White Koi Fish Near Yellow Koi Fish",
},
{
url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
alt: "Group of Horses Running",
},
];
```
---

## Задание 3

- Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
- Если инпут пустой, в спане должна отображаться строка "Anonymous".
- Обязательно очищай значение в инпуте по краям от пробелов.
- Если инпут пуст или содержит только пробелы, вместо имени у спан должна подставляться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />

`<h1>Hello, <span id="name-output">Anonymous</span>!</h1>`


---
## Задание 4

Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

- Обработка отправки формы form.login-form должна быть по событию submit.
- При отправке формы страница не должна перезагружаться.
- Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены. 
- Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements. 
- Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
---

## Задание 5

- Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
```html
<div class="widget">
    <p>Background color: <span class="color">-</span></p>
    <button type="button" class="change-color">Change color</button>
</div>
```

 - Для генерации случайного цвета используй функцию `getRandomHexColor`.
```angularjs
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}
```
## Задание 6

- Напиши скрипт создания и очистки коллекции элементов. 
- Пользователь вводит количество элементов в `input` и нажимает кнопку Создать
- После чего рендерится коллекция. 
- При нажатии на кнопку Очистить, коллекция элементов очищается.
```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```


- Создай функцию `createBoxes(amount)`, которая принимает один параметр - число. 
- После нажатия пользователем на кнопку Create нужно провалидировать значение input, оно должно быть в пределах от 1 до 100 включительно. Только если оно удовлетворяет условию, должны добавляться новые <div> элементы в DOM.
- Функция создает столько `<div>`, сколько указано в amount и добавляет их в div#boxes.
- Размеры самого первого <div> - 30px на 30px. 
- Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
- Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
```angularjs
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}
```


Создай функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем самым удаляя все созданные элементы.