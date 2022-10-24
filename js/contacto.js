
document.getElementById("formulario-usuario").btn.addEventListener('click', (e) =>{
    e.preventDefault();
    const userInfo = {
        username: username.value,
        lastname: lastname.value,
        email: email.value,
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
});


