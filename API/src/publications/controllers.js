const controller = {
    list: (req, res) => {
        res.send('endpoint de publications');
    },
    delete: (req, res) => {
        const id = req.params.id;
        const state = req.body.state;

        res.send('Se elimino la publicación con el id: '+id);
    },
    publish: (req, res) => {
        const place = req.body.place;
        const photo = req.body.photo;
        const user = req.body.user;
        const description = req.body.description;
        const state = req.body.state;

        res.send('Se creo la publicación del usuario '+user);
    },
    publish_rental: (req, res) => {
        const state = req.body.state;
        const rental_id = req.body.rental_id;

        res.send('Se creo la publicacion de propiedad con el id '+rental_id);
    },
    publish_rate: (req, res) => {
        const state = req.body.state;
        const rental_id = req.body.rental_id;

        res.send('Se creo la publicacion del usuario que califico a la propiedad con el id '+rental_id);
    },
    comment: (req, res) =>{
        const id = req.body.id;
        const user = req.body.user;
        const comment = req.body.comment;

        res.send('El usuario '+user+ 'commento '+'"'+comment+'" en la publicacion con id '+id);
    }
}

module.exports = controller;