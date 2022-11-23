const { Schema, model} = require('mongoose');

const schema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId
    },
    token: {
        type: String
    },
    expiration_date: {
        type: Date
    },
});

module.exports = model('token', schema);