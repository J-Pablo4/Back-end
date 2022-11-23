const model = require('./model');
const multer = require('multer');

const controller = {
    list: (req, res) => {
        
        const status = req.query.status;

        if(status === "active")
        {
            res.send('endpoint de publications activos');
        }
    },
    delete: (req, res) => {
        const id = req.body.id;
        const status = req.body.status;

        res.send('Se elimino la publicación con el id: '+id);
    },
    publish: (req, res) => {
        console.log(req.file);
        
        const place = req.body.place;
        const photo = req.file.path;
        const user = req.user;
        const description = req.body.description;
        const rate = req.body.rate || null;

        res.send('Llego');

        model.create({place, photo, user, description, rate}).then((response) =>
        {
            res.send(response);
        }).catch((err) =>
        {
            res.status(400).send(err);
        });
    },
    publish_rental: (req, res) => {
        const status = req.body.status;
        const rental_id = req.body.rental_id;

        // res.send('Se creo la publicacion de propiedad con el id '+rental_id);
    },
    publish_rate: (req, res, next) => {
        const status = req.body.status;
        const rental_id = req.body.rental_id;

        rental.update(
            { _id: person._id }, 
            { $push: { friends: friend } },
            done
        );

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