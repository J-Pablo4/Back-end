
const controller = {
    list: (req, res) => {
        res.send('endpoint de places');
    },
    update: (req, res) => {
        const id = req.params.id;
        const country = req.body.country;
        const city = req.body.city;
        const continent = req.body.continent;
        const weather = req.body.weather;

        res.send('Se actualizo el lugar '+city+' del pais '+country);
    }
}

module.exports = controller;