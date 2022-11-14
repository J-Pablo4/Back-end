
const controller = {
    list: (req, res) => {
        res.send('endpoint de places');
    },
    delete: (req, res) => {
        const id = req.params.id;
        const state = req.body.delete;

        res.send('Se borro el lugar con el id '+id);
    },
    create: (req, res) => {
        const country = req.body.country;
        const city = req.body.city;
        const continent = req.body.continent;
        const weather = req.body.weather;

        res.send('Se creo el lugar '+city+' del pais '+country);
    },
    list_by_weather: (req, res) => {
        const weather = req.body.weather;

        res.send('Endpoint de places con el clima '+weather)
    },
    list_by_continent: (req, res) => {
        const continent = req.body.continent;
        
        res.send('Endpoint de places del continente '+continent)
    },
    list_by_country: (req, res) => {
        const country = req.body.country;

        res.send('Endpoint de places del pais '+country)
    }
}

module.exports = controller;