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
    comments: {
        type: Schema.Types.Mixed
    }
});

module.exports = model('publications', schema);