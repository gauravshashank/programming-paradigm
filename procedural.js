//All the user action written as one procedure. Very easy to learn, but effectively ruins the DRY coding principle.

const form = document.getElementById('signup-form');

function signupHandler(event) {
    event.preventDefault(); //To prevent page refresh on submit

    const userNameInput = document.getElementById('username');
    const userName = userNameInput.value;
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    if(userName.trim().length === 0 ){
        alert('Please enter username');
        return;
    }
    if(password.trim().length < 5 ){
        alert('Minimum six characters in password');
        return;
    }

    const newUser = {
        username: userName,
        password: password
    }
    console.log(newUser);
    console.log('Hi!!!! Greetings ' + newUser.username + ' from procedural.');
}


form.addEventListener('submit', signupHandler);