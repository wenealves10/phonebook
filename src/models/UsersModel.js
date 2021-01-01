const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const UsersModel = mongoose.model('Users',UsersSchema);

class Users{

}

module.exports = Users;