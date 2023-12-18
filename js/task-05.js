const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
inputRef.addEventListener("input", onFocusInput);


function onFocusInput(event) {
    // Записываем в переменную значение пустой строки
    let contentInput = '';
    // Определяем в переменную значение которое было введено в инпуте
    contentInput += event.target.value;
    // Выводим в ДОМ елемент значение переменной
    nameOutputRef.textContent = contentInput
    /*Проверяем если значение перемнной пустая строка , выводим начальное значение*/
    if (contentInput === '') {
        nameOutputRef.textContent = 'Anonymus'
    }
}