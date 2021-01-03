import validator from 'validator';
export default class Login{
    constructor(form){
        this.form = document.querySelector(form);
    }

    validate(){
        if(!this.form) return;
        this.form.addEventListener('submit', event => {
            event.preventDefault();
             this.valEmail(event);
        });
    }

    valEmail(e){
        if(!e.target) return;
        const inputEmail = e.target.querySelector('input[type=email]');
        if(!validator.isEmail(inputEmail.value)){
            inputEmail.style.borderColor = 'red';
            inputEmail.value = '';
            inputEmail.focus();
        }else{
            inputEmail.style.borderColor = '';
            this.valPassword(e);
        }
    }

    valPassword(e){
        if(!e.target) return;
        const inputPassword = e.target.querySelector('input[type=password]');
        const password = inputPassword.value;
        if(password != '' && password != undefined && !(password.length < 4 || password.length > 50)){
            e.target.submit();
        }else{
            inputPassword.style.borderColor = 'red';
            inputPassword.value = '';
            inputPassword.focus();
        }
    }
}