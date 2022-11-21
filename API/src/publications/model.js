const { Schema, model} = require('mongoose');

const schema = new Schema({
    place: {
        type: String
    },
    photo: {
        type: String
    },
    user: {
        type: String
    },
    description:{
        type: String,
    },
    status: {
        type: Number,
        default: 1
    },
    comments: {
        type: String,
        default: ""
    }
});

module.exports = model('publications', schema);