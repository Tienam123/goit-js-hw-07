const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
const BASE_VALUE = 'Anonymous';

inputRef.addEventListener('input', onFocusInput);

function onFocusInput(event) {
  nameOutputRef.textContent = event.target.value.trim();
  if (nameOutputRef.textContent === '') {
    nameOutputRef.textContent = BASE_VALUE;
  }
}