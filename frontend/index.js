import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/styles.css';
import Register from './class/Register';
import Login from './class/Login';

let btnRegister = document.querySelector('#register');
let btnLogin = document.querySelector('#account');
const formRegister = document.querySelector('#Register');
const formLogin = document.querySelector('#Login');

if(formRegister && formLogin){
    if(btnRegister){
        btnRegister.addEventListener('click',function(event){
            event.preventDefault();
            const submitRegister = Register('#emailCreater','#passwordCreater','#passwordCreaterRepite');
            if(submitRegister){
               formRegister.submit();
            }
        });
    }

    if(btnLogin){
        btnLogin.addEventListener('click',function(event){
            event.preventDefault();
            const submitLogin = Login('#emailAccount','#passwordAccount');
            if(submitLogin){
                formLogin.submit();
            }
        })
    }

}




