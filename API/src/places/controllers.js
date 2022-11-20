const controller = {
    list: (req, res) => {
        res.send('endpoint de places activos');
    },
    create: (req, res) => {
        const country = req.body.country;
        const city = req.body.city;
        const continent = req.body.continent;
        const weather = req.body.weather;

        res.send('Se creo el lugar '+city+' del pais '+country);
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