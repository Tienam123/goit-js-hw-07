const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

incrementEl.addEventListener("click", function () {
    counterValue += 1;
    valueEl.innerHTML = counterValue;
});
decrementEl.addEventListener("click", function () {
    counterValue -= 1;
    valueEl.innerHTML = counterValue;
});
