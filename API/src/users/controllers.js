const model = require('./model')

const controller = {

    update: (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const rol = req.body.rol;
        const publications = req.body.publications;
        const rental_id = req.body.rental_id;

        res.send('Se actualizo el usuario '+name+' con el id:'+id);
    },
    getOne: (req, res) => {
        const id = req.params.id;

        res.send('Endpoint del usuario con el id:'+id);
    },
    create: (req, res) => {
        const nombre = req.body.nombre;
        const correo = req.body.correo;
        const password = req.body.password;

        console.log(req.body);

        model.create({nombre, correo, password}).then((response) => {
            res.send(response);
        }).catch((err) =>{
            res.status(400).send(err);
        });
    }, 
    logIn: (req, res) => {
        const email = req.query.email;
        const password = req.query.password;

        if(email === "example@outlook.com" && password === "123")
        {
            res.send('Endpoint de login');
        }
    }
}

module.exports = controller;