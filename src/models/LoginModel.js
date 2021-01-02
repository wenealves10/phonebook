const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');


const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login',LoginSchema);

class Login{

    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

   async register() {
       this.validate();
       if (this.errors.length > 0) return;
       await this.userExists();
       if (this.errors.length > 0) return;
       const salt = await bcrypt.genSalt(10);
       const hash = await bcrypt.hash(this.body.password, salt);
       this.body = {
           email: this.body.email,
           password: hash
       }
       this.user = await LoginModel.create(this.body);
   }

   async account(){
       this.validateAccount();
       if (this.errors.length > 0) return;
       this.user = await LoginModel.findOne({email: this.body.email});
       if(!this.user){
        this.errors.push('E-mail inválido');
        return;
       }

       if(!bcrypt.compareSync(this.body.password, this.user.password)){
        this.errors.push('Senha inválida');
        this.user = null;
        return;
       }

   }

   async userExists(){
        this.user = await LoginModel.findOne({email: this.body.email});
        if(this.user) this.errors.push('Usuário já Existe!!');
    }
    
    validate(){
        this.clearUp();
        if(!validator.default.isEmail(this.body.email)){
            this.errors.push('E-mail inválido!!');
        }
        if(this.body.password != this.body.passwordRepeat){
            this.errors.push('Senhas diferentes');
        }
        if(this.body.password.length < 4  || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 4 e 50 caracteres');
        }

    } 

    clearUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body = '';
            }
        }

        this.body = {
            email: this.body.emailCreater,
            password: this.body.passwordCreater,
            passwordRepeat: this.body.passwordCreaterRepeat
        }
    }
    validateAccount(){
        this.clearUpAccount();
        if(!validator.default.isEmail(this.body.email)){
            this.errors.push('E-mail inválido!!');
        }
        if(this.body.password.length < 4  || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 4 e 50 caracteres');
        }

    } 

    clearUpAccount(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body = '';
            }
        }

        this.body = {
            email: this.body.emailAccount,
            password: this.body.passwordAccount,
        }
    }
}

module.exports = Login;