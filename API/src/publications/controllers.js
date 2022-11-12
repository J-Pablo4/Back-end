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
        const type = req.body.type;
        const photo = req.body.photo;
        const user = req.body.user;
        const description = req.body.description;
        const date = req.body.date;
        const state = req.body.state;

        res.send('Se creo la publicación del usuario '+user);
    },
    comment: (req, res) =>{
        const id = req.params.id;
        const user = req.body.user;
        const comment = req.body.comment;

        res.send('El usuario '+user+ 'commento '+'"'+comment+'" en la publicacion con id '+id);
    }
}

module.exports = controller;