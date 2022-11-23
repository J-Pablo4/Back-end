const {Schema, model} = require('mongoose');

const schema = new Schema({
    nombre: {
        type: String
    },
    direction: {
        type: String
    },
    owner: {
        type: String
    },
    description:{
        type: String,
    },
    status: {
        type: Number,
        default: 1
    },
    rates: {
        type: Schema.Types.Mixed
    },
    type_rental: {
        type: String
    },
    category: {
        type: String
    },
    area_number:{
        type: Number
    },
    bed_number:{
        type: Number
    },
    max_guest:{
        type: Number
    },
    renter:{
        type: String
    },
    photo:{
        type: String
    },
    price:{
        type: Number
    },
    place:{
        type: String
    },
    comments:{
        type: Schema.Types.Mixed
    }
});

module.exports = model('publications', schema);