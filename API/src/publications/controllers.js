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
    delete: (req, res) => {
        const id = req.body.id;
        const status = req.body.status;

        res.send('Se elimino la publicación con el id: '+id);
    },
    publish: (req, res) => {
        const place = req.body.place;
        const photo = req.file.path;
        const user_name = req.user;
        const description = req.body.description;

        model.create({place, photo, user_name, description}).then((response) =>
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

        model.create({place, accommodation_name, photo, user_name, description, rental_id}).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    publish_rate: (req, res, next) => {
        const status = req.body.status;
        const rental_id = req.body.rental_id;

        // rental.update(
        //     { _id: person._id },
        //     { $push: { friends: friend } },
        //     done
        // );

        // res.send('Se creo la publicacion del usuario que califico a la propiedad con el id '+rental_id);

        next();
    },
    comment: (req, res) =>{
        const id = req.body.id;
        const user = req.body.user;
        const comment = req.body.comment;

        res.send('El usuario '+user+ 'commento '+'"'+comment+'" en la publicacion con id '+id);
    }
}

module.exports = controller;