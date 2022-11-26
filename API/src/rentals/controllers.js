const model = require('./model');
const user_model = require('../users/model');
const token_DB = require('../tokens/model');
const slash = require('slash');

const controller = {
    list: (req, res) => {
        model.find({}).then((response) => {
            response.forEach((element) => {
                element.photo = slash(element.photo);
            });
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    getOne: (req, res) => {
        const id = req.params.id;

        res.send('se obtuvo el rental con el id: '+id);
    },
    book: (req, res) => {
        const id = req.params.id;
        const renter = req.body.renter;
        const date = req.body.date;

        res.send('Se rento la propiedad con el id: '+id+' por el usuario '+renter);
    },
    create: (req, res) =>{
        const type = req.body.type;
        const category = req.body.category;
        const user_name = req.user;
        const accommodation_name = req.body.accommodation_name;
        const maximum_guests = req.body.maximum_guests;
        const country = req.body.country;
        const street_address = req.body.street_address;
        const postal_code = req.body.postal_code;
        const city = req.body.city;
        const number_of_bedrooms = req.body.number_of_bedrooms;
        const description = req.body.description;
        const photo = req.file.path;
        const price = req.body.price;
        const rate = req.body.rate || null;
        const token = req.query.token;

        model.create({type, category, user_name, accommodation_name, maximum_guests, country, street_address, postal_code, city, number_of_bedrooms, description, photo, price, rate}).then((response) =>
        {
            token_DB.findOne({token}).then((respuesta) => {
                const user_id = respuesta.user_id;
                user_model.findOneAndUpdate({_id: user_id}, {rol: 'owner'}, {returnOriginal: false}).then((resp) => {
                    res.send(resp);
                }).catch((err) => {
                    res.status(400).send(err);
                });
            }).catch((err) => {
                res.status.send(err);
            });
        }).catch((err) =>
        {
            res.status(400).send(err);
        });
    },
    rate: (req, res) =>{
        const id = req.params.id;
        const comment = req.body.comment;
        const user_rate = req.body.rate;
        const renter = req.body.renter;

        res.send('Se califico la propiedad con el id: '+id);
    },
    list_by_place: (req, res) => {
        const place = req.params.place;

        res.send('endpoint de rentals en '+place);
    }
}

module.exports = controller;