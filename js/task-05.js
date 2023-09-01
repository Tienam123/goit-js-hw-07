const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
console.log(inputRef);
inputRef.addEventListener("input", onFocusInput);


function onFocusInput(event) {
    let contentInput = '';
    contentInput += event.data;
        nameOutputRef.textContent += contentInput;
}