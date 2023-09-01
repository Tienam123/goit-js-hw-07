const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.getAttribute('data-length')
inputRef.addEventListener('blur', onInputBlur);
console.log(inputLength);
function onInputBlur(event) {

    if (event.currentTarget.value.length < inputLength) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.replace('valid','invalid');
    } else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.replace('invalid','valid');
    }
}