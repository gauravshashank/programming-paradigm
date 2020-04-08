// More connected to the real world. Everything is defined in entities and attributes.

class User {
    constructor(uName, uPass) {
        this.userName = uName;
        this.password = uPass;
    }

    greet() {
        console.log('Hi!!! Greetings ' + this.userName + ' from OOPs.');
    }
}

class SignupForm {
    constructor() {
        // attributes of an entity
        this.form = document.getElementById('signup-form');
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit', this.submitHandler.bind(this));
    }

    //method of an entity
    submitHandler(event) {
        event.preventDefault();

        const userName = this.userNameInput.value;
        const password = this.passwordInput.value;

        if(!Validator.validate(userName, Validator.REQUIRED)) {
            alert('Please enter username');
            return;
        }

        if(!Validator.validate(password, Validator.MIN_LENGTH, 5)) {
            alert('Minimum six characters in password');
            return;
        }

        const newUser = new User(userName, password);
        console.log(newUser);;
        newUser.greet();

    }


}

class Validator {

    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, flag, validatorValue) {
        if( flag === this.REQUIRED ) {
            return value.trim().length > 0;
        }
        if( flag === this.MIN_LENGTH ) {
            return value.trim().length > validatorValue;
        }
    }
}

new SignupForm();