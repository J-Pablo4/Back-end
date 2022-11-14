const controller = {
    list: (req, res) => {
        const state = req.query.state;

        if(state === "active")
        {
            res.send('endpoint de places activos');
        }
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

        const state = req.query.state;
        const weather = req.params.weather;

        if(state === "active")
        {
            res.send('Endpoint de places activos con el clima '+weather)
        }

    },
    list_by_continent: (req, res) => {
        const continent = req.params.continent;
        const state = req.query.state;

        if(state === "active")
        {
            res.send('Endpoint de places activos del continente '+continent)
        }
    },
    list_by_country: (req, res) => {
        const country = req.params.country;
        const state = req.query.state;

        if(state === "active")
        {
            res.send('Endpoint de places activos del pais '+country)
        }
    }
}

module.exports = controller;