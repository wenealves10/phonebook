import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/styles.css';
import Login from './assets/classes/Login';
import Register from './assets/classes/Register';
import Contacts from './assets/classes/Contacts';
import ValTel from './assets/classes/ValTel';

const login = new Login('#Login');
login.validate();
const register = new Register('#Register');
register.validate();
const contacts = new Contacts('#Contacts');
contacts.validate();
ValTel.init('input[type=tel]');





