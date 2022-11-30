const model = require('./model');
const slash = require('slash');

const controller = {
    list: (req, res) => {

        model.find({status: 1}).then((response) => {

            response.forEach((element) => {
                element.photo = slash(element.photo);
            });
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    publish: (req, res) => {
        const place = req.body.place;
        const photo = req.file.path;
        const user_name = req.user;
        const description = req.body.description;
        const comments = [];

        model.create({place, photo, user_name, description, comments}).then((response) =>
        {
            res.send(response);
        }).catch((err) =>
        {
            res.status(400).send(err);
        });
    },
    publish_rental: (req, res) => {
        const user_name = req.user;
        const place = req.body.country;
        const accommodation_name = req.body.accommodation_name;
        const photo = req.file.path;
        const description = req.body.description;
        const rental_id = req.rental_id;
        const comments = [];

        model.create({place, accommodation_name, photo, user_name, description, rental_id, comments}).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    comment: (req, res) =>{
        const id = req.body.id;
        const user = req.body.user;
        const comment = req.body.comment;

        res.send('El usuario '+user+ 'commento '+'"'+comment+'" en la publicacion con id '+id);
    }
}

module.exports = controller;