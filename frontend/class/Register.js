import { ValidateLogin, ValidatePassword } from './ValidatePassword';
import { ValidateEmail, ValidateName } from './ValidateEmail';


export default function Register(Email, Password1, Password2){
    // const name = ValidateName(Name);
    const email = ValidateEmail(Email);
    const password = ValidatePassword(Password1, Password2);
   

    if(email && password){
        return true;
    }else{
        return false;
    }

}
