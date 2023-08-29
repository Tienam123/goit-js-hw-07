const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');
let value = 0;

incrementEl.addEventListener("click", function () {
  value += 1;
  valueEl.innerHTML = value;
});
decrementEl.addEventListener("click", function () {
  value -= 1;
  valueEl.innerHTML = value;
});
