const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

function makeElements() {
  return ingredients.map((el) => {
    const liEl = document.createElement("li");
    liEl.textContent = el;
    liEl.className = "item update";
    return liEl;
  });
}
//Выгружаем в DOM и распыляем массив
ingredientsEl.append(...makeElements());
