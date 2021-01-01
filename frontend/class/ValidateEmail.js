export function ValidateEmail(Email) {
    let email = document.querySelector(Email).value;
    let val = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
   if(email != '' && val.test(email)){
       return true;
   }else{
       alert('Email inválido!!');
       window.location.reload();
       return false;
   }
} 

export function ValidateName(Name){
    let name = document.querySelector(Name).value;
    if(name != '' && name != ' ' && name != undefined && isNaN(name)){
        return true;
    }else{
        return false;
    }
}