const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
inputRef.addEventListener('input',onChangeInput);
const textRef = document.querySelector('#text');

function onChangeInput (event) {
    console.log(event.currentTarget.value);
textRef.style.fontSize = event.currentTarget.value + 'px';
}