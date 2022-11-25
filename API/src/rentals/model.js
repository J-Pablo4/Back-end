const {Schema, model} = require('mongoose');

const schema = new Schema({
    type: {
        type: String
    },
    category: {
        type: String
    },
    user_name: {
        type: String
    },
    accommodation_name:{
        type: String,
    },
    maximum_guests: {
        type: Number,
    },
    country: {
        type: Schema.Types.Mixed
    },
    street_address: {
        type: String
    },
    postal_code: {
        type: String
    },
    city:{
        type: String
    },
    number_of_bedrooms:{
        type: Number
    },
    description:{
        type: String
    },
    photo:{
        type: String
    },
    price:{
        type: Number
    },
    rate:{
        type: Number
    }
});

module.exports = model('rentals', schema);