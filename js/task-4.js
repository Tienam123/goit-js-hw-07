const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();
  if (passwordValue === '' || emailValue === '') {
    alert('All form fields must be filled in');
    return;
  }
  const user = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(user);
  event.target.reset();
}