const controller = {
    list: (req, res) => {
        res.send('endpoint de rentals');
    },
    getOne: (req, res) => {
        const id = req.params.id;

        res.send('se obtuvo el rental con el id: '+id);
    },
    update: (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const address = req.body.address;
        const type = req.body.type;
        const category = req.body.category;
        const area_num = req.body.area_num;
        const bed_num = req.body.bed_num;
        const amenities = req.body.amenities;
        const max_person_number = req.body.max_person_number;
        const place = req.body.place;

        res.send('Se actualizo la propiedad '+name+' con la direccion '+address+' y el id: '+id);
    }
}

module.exports = controller;