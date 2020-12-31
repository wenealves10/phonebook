const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    year: {type: Number, required: true}
});

const UsersModel = mongoose.model('users',UsersSchema);

class Users{

}

module.exports = Users;