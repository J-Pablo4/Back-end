const token_DB = require('../tokens/model');

function authMiddleware(req, res, next)
{
    const token = req.query.token;

    token_DB.findOne({token}).then((respuesta) => {

        const currentTime = new Date().getTime();
        let token_time = respuesta.expiration_date;
        token_time = token_time.getTime();

        if(currentTime <= token_time)
        {
            next();
        }
    }).catch((err) => {
        res.status(400).send('err');
    });
}
module.exports = authMiddleware;