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
    event.preventDefault();
    const password = event.currentTarget.elements.password;
    const email = event.currentTarget.elements.email;
    if (email.value == '') {
        alert('Все поля должны быть заполнены');
        return;
    } else if (password.value == '') {
        alert('Все поля должны быть заполнены');
        return;
    } else {
            user.email = email.value;
            user.password = password.value;
    }
    console.log(user);
    event.currentTarget.reset();




}