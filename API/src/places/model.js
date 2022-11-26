const { Schema, model} = require('mongoose');

const schema = new Schema({
    place: {
        type: String
    },
    photo: {
        type: String
    }
});

module.exports = model('places', schema);