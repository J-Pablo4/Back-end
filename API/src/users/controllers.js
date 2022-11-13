const controller = {

    update: (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;
        const rol = req.body.rol;
        const publications = req.body.publications

        res.send('Se actualizo el usuario '+name+' '+surname+' con el id:'+id);
    },
    getOne: (req, res) => {
        const id = req.params.id;

        res.send('Endpoint del usuario con el id:'+id);
    },
    create: (req, res) => {
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;
        const rol = req.body.rol;

        res.send('Se creo el usuario'+name+' '+surname);
    }, 
    log_in: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        res.send('Endpoint de login');
    }
}

module.exports = controller;