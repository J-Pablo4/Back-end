const { Schema, model} = require('mongoose');

const schema = new Schema({
    nombre: {
        type: String
    },
    correo: {
        type: String
    },
    password: {
        type: String
    },
    rol:{
        type: String,
        default: "user"
    },
    status: {
        type: Number,
        default: 1
    }
});

module.exports = model('users', schema);