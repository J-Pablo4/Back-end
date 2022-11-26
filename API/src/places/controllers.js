const model = require('./model');

const controller = {
    list: (req, res) => {
        model.find({}).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.status(400).send(err);
        });
    },
    list_by_weather: (req, res) => {

        const weather = req.params.weather;
        res.send('Endpoint de places activos con el clima '+weather);

    },
    list_by_continent: (req, res) => {
        const continent = req.params.continent;
        res.send('Endpoint de places activos del continente '+continent);
    },
    list_by_country: (req, res) => {
        const country = req.params.country;
        res.send('Endpoint de places activos del pais '+country);
    }
}

module.exports = controller;