import validator from 'validator';
export default class Contacts{
    constructor(form){
        this.form = document.querySelector(form);
    }

    validate(){
        if(!this.form) return;
        this.form.addEventListener('submit',event =>{
            event.preventDefault();
            this.valName(event);
        })
    }

    valName(e){
        if(!e.target) return;
        const inputName = e.target.querySelector('input[type=text]');
        if(inputName.value != '' && inputName.value != undefined && !(inputName.value.length < 3 || inputName.value.length > 60)){
            this.valEmail(e);
        }else{
            inputName.style.borderColor = 'red';
            inputName.value = '';
            inputName.focus(); 
        }
    }

    valEmail(e){
        if(!e.target) return;
        const inputEmail = e.target.querySelector('input[type=email]');
        if(!validator.isEmail(inputEmail.value)){
            inputEmail.style.borderColor = 'red';
            inputEmail.value = '';
            inputEmail.focus();
        }else{
           e.target.submit();
        }
    }
    
}