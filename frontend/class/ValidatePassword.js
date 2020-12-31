export function ValidatePassword(password1, password2) {
    let password = document.querySelector(password1);
    let passwordConfirm = document.querySelector(password2);
    if (password.value != passwordConfirm.value) {
        password.value = '';
        passwordConfirm.value = '';
        passwordConfirm.style.borderColor = '#f00';
        return false;
    } else {
        if (password.value.length >= 8 && password.value.length <= 16) {
            passwordConfirm.value = '';
            passwordConfirm.style.borderColor = '#0f0';
            return true;
        } else {
            password.value = '';
            passwordConfirm.value = '';
            passwordConfirm.style.borderColor = '#f00';
            return false;
        }
    }
}


export function ValidateLogin(password){
    let pswd = document.querySelector(password).value;
    if(pswd.length >= 4 && pswd.length <= 16){
        return true;
    }else{
        return false;
    }

}