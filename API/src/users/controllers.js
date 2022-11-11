const controller = {
    list: (req, res) => {
        res.send('endpoint de users');
    },
    update: (req, res) => {
        const id = req.params.id;
        const name = req.body.name;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;
        const rol = req.body.rol;

        res.send('Se actualizo el usuario '+name+' '+surname+' con el id:'+id);
    }
}

module.exports = controller;