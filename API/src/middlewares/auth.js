const token_DB = require('../tokens/model');
const user = require('../users/model');

function authMiddleware(req, res, next)
{
    const token = req.query.token;

    token_DB.findOne({token}).then((respuesta) => {

        const currentTime = new Date().getTime();
        let token_time = respuesta.expiration_date;
        token_time = token_time.getTime();

        if(currentTime <= token_time)
        {
            const user_id = respuesta.user_id;
            user.findOne({_id: user_id}).then((respond) => {
                const user_name = respond.nombre;

                req.user = user_name;

                next();

            }).catch((err) => {
                res.status(400).send(err);
            });
        }else
        {
            res.status(400).send('el token expiró');
        }
    }).catch((err) => {
        res.status(400).send(err);
    });
}
module.exports = authMiddleware;