const controller = {

    update: (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;
        const rol = req.body.rol;
        const publications = req.body.publications
        const rental_id = req.body.rental_id;

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

        res.send('Se creo el usuario'+name+' '+surname);
    }, 
    log_in: (req, res) => {
        const email = req.query.email;
        const password = req.query.password;

        if(email === "example@outlook.com" && password === "123")
            res.send('Endpoint de login');
    }
}

module.exports = controller;