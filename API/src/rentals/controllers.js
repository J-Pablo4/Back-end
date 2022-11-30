const model = require('./model');
const user_model = require('../users/model');
const token_DB = require('../tokens/model');
const publications = require('../publications/model');
const slash = require('slash');
const { response } = require('express');

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
        const _id = req.params.id;

        model.findOne({_id}).then((response) => {
            response.photo = slash(response.photo);
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    book: (req, res) => {
        const _id = req.body.publication_id;
        const check_in = req.body.check_in;
        const check_out = req.body.check_out;
        const maximum_guests = req.body.total;

        model.findOneAndUpdate({_id}, {check_in: check_in, check_out: check_out, rented: 1}, {returnOriginal: false}).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    create: (req, res, next) =>{
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
                    req.rental_id = response._id;
                    next();
                }).catch((err) => {
                    res.status(400).send(err);
                });
            }).catch((err) => {
                res.status(400).send(err);
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
        const country = req.params.place;

        model.find({country}).then((response) => {
            console.log(response);
            response.forEach((element) => {
                element.photo = slash(element.photo);
            });
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    }
}

module.exports = controller;