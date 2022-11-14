function ownerMiddleware(req, res, next)
{
    const rol = req.query.rol;

    if(rol === 'owner')
    {
        next();
    }else
    {
        res.status(401).send('no autenticado');
    }
}

module.exports = ownerMiddleware;