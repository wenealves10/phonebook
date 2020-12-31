import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/styles.css';
import Register from './class/Register';

let btnRegister = document.querySelector('#register');
const forms = document.querySelectorAll('form');

if(forms.length > 0){
    if(btnRegister){
        btnRegister.addEventListener('click',function(event){
            event.preventDefault();
            const submitRegister = Register('#emailCreater','#passwordCreater','#passwordCreaterRepite');
            if(submitRegister){
               forms[0].submit();
            }
        });
    }
}


