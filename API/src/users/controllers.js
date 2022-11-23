const model = require('./model');
const token = require('../tokens/model');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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
    create: (req, res) => {

        const nombre = req.body.nombre;
        const correo = req.body.correo;
        const password = btoa(req.body.password);

        const hash = crypto.createHash('sha256').update(password).digest('hex');


        model.create({nombre, correo, password: hash}).then((response) => {
            res.send(response);
        }).catch((err) =>{
            res.status(400).send(err);
        });
    }, 
    logIn: (req, res) => {
        const correo = req.body.correo;
        const password = btoa(req.body.password);

        const hash = crypto.createHash('sha256').update(password).digest('hex');

            
        model.findOne({correo, password: hash}).then((response) => {
            const token_string = crypto.createHash('sha256').update(Date.now().toString()).digest('hex');
            const currentTime = new Date().getTime();
            const updatedTIme = new Date(currentTime + 24 * 60 * 60 * 1000);

            token.create({user_id: response._id, token: token_string, expiration_date: updatedTIme}).then((response) => {

                console.log(response);
                res.send(response);
            }).catch((err) =>{
                res.status(400).send(err);
            });

            console.log('Token:',token);
        }).catch((err) =>{
            console.log(err)
            res.status(400).send(err);
        });
    }
}

module.exports = controller;