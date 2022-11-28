const { Schema, model} = require('mongoose');

// const schema_comments = new Schema({
//     user:{
//         type: Schema.Types.ObjectId
//     },
//     comment:{
//         type: String
//     },
//     date:{
//         type: Date
//     }
// });

const schema = new Schema({
    place: {
        type: String
    },
    accommodation_name:{
        type: String,
        default: null
    },
    photo: {
        type: String
    },
    user_name: {
        type: String
    },
    description:{
        type: String,
    },
    status: {
        type: Number,
        default: 1
    },
    rate:{
        type: Number,
        default: null
    },
    rental_id:{
        type: Schema.Types.ObjectId
    },
    comments: {
        type: Schema.Types.Mixed
    }
});

module.exports = model('publications', schema);