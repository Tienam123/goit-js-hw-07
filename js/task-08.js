const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('.login-form__email'),
    password: document.querySelector('.login-form__password'),
    submit: document.querySelector('.login-form__submit'),
}
//Вешаем обработчик событий на отправку формы
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    const user = {};
    // Запрещаем обновление страницы
    event.preventDefault();
    const password = event.currentTarget.elements.password;
    const email = event.currentTarget.elements.email;
    // Проверяем нет ли пустых полей в форме
    if (email.value == "") {
        alert('Все поля должны быть заполнены');
        return;
    } else if (password.value == "") {
        alert('Все поля должны быть заполнены');
        return;
    //     Если нет записываем данные с полей в обьект
    } else {
            user.email = email.value;
            user.password = password.value;
    }
    console.log(user);
    // Обнуляем поля
    event.currentTarget.reset();
}