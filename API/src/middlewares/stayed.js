function stayedMiddleware(req, res, next)
{
    const rol = req.query.rol;

    if(rol === 'stayed')
    {
        next();
    }else
    {
        res.status(401).send('no autenticado');
    }
}

module.exports = stayedMiddleware;