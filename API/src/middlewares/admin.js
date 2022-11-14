function adminMiddleware(req, res, next)
{
    const rol = req.query.rol;

    if(rol === 'admin')
    {
        next();
    }else
    {
        res.status(401).send('no autenticado');
    }
}

module.exports = adminMiddleware;