import {ValidateEmail} from './ValidateEmail';
import {ValidateLogin} from './ValidatePassword';

export default function Login(Email, Password){
    const email = ValidateEmail(Email);
    const password = ValidateLogin(Password);

    if(email && password){
        return true;
    }else{
        return false;
    }
}