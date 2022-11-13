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
        const price = req.body.price;
        const photo = req.body.photo;
        const place = req.body.place;

        res.send('Se actualizo la propiedad '+name+' con la direccion '+address+' y el id: '+id);
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
        const name = req.body.name; 
        const max_person_number = req.body.max_person_number; 
        const address = req.body.address; 
        const area_num = req.body.area_num;
        const bed_num = req.body.bed_num; 
        const amenities = req.body.amenities;
        const description = req.body.description;
        const photo = req.body.photo;
        const price = req.body.price;
        const place = req.body.place;
        const owner = req.body.owner;

        req.send('Se puso en renta la propiedad '+name);
    },
    rate: (req, res) =>{
        const id = req.params.id;
        const comment = req.body.comment;
        const user_rate = req.body.rate;
        const renter = req.body.renter;
    }
}

module.exports = controller;