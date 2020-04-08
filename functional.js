// In functional programming, we write pure functions. Though its ok for some functions to have side effects, we try to keep it at a minimum.
// Keep the function as generic as possible.

const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function getUserInput(inputElementId) {
    return document.getElementById(inputElementId).value;
}

function validate(value, flag, validatorValue) {
    if( flag === REQUIRED ) {
        return value.trim().length > 0
    }

    if( flag === MIN_LENGTH ) {
        return value.trim().length > validatorValue
    }
}

function createUser( userName, password ) {
    if(!validate(userName, REQUIRED)){
        throw new Error('Please enter username')
    }
    if(!validate(password, MIN_LENGTH, 5)) {
        throw new Error('Minimum six characters in password')
    }

    return {
        userName: userName,
        password: password
    }
}

function greet(uName) {
    console.log('Hi!!! Greetings ' + uName + ' from functional.')
}

function signupHandler(event) {
    event.preventDefault();

    const userName = getUserInput('username');
    const password = getUserInput('password');

    try {
        const newUser = createUser(userName, password);
        console.log(newUser);
        greet(newUser.userName);
    } catch (e) {
        alert(e.message);
    }

}

function getForm(formId, handlerFunction) {
 const form = document.getElementById(formId);
 form.addEventListener('submit', handlerFunction);
}

getForm('signup-form', signupHandler);

