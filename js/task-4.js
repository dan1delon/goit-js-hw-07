const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    const objWithData = {};

    if (login === '' || password === '') {
        return alert('All form fields must be filled in!');
    } else {
        objWithData.login = login.trim();
        objWithData.password = password.trim();
    }

    console.log(objWithData);
    form.reset();
});