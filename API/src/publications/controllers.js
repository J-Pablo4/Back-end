const controller = {
    list: (req, res) => {
        res.send('endpoint de publications');
    },
    update: (req, res) => {
        const id = req.params.id;
        const place = req.body.place;
        const type = req.body.type;
        const photo = req.body.photo;
        const user = req.body.user;
        const comment = req.body.comment;
        const date = req.body.date;

        res.send('Se actualizo la publicación '+id+' del usuario '+user);
    }
}

module.exports = controller;