import validator from 'validator';
export default class Register{
    constructor(form){
        this.form = document.querySelector(form);
    }
    validate(){
        if(!this.form) return;
        this.form.addEventListener('submit', event =>{
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
            this.valPasswords(e)
        }
    }

    valPasswords(e){
        if(!e.target) return;
        const inputPasswords = e.target.querySelectorAll('input[type=password]');
        const password1 = inputPasswords[0];
        const password2 = inputPasswords[1];
        if(password1.value != '' && password1.value != undefined && !(password1.value.length < 4 || password1.value.length > 50)){
            if(password2.value != '' && password2.value != undefined && !(password2.value.length < 4 || password2.value.length > 50) && !(password1.value != password2.value)){
                e.target.submit();
            }else{
                password2.style.borderColor = 'red';
                password2.value = '';
                password2.focus();
            }
        }else{
            password1.style.borderColor = 'red';
            password1.value = '';
            password1.focus();
        }
    }
}