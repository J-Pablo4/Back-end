const express = require('express');
const placesRoutes = require('./src/places/routes');
const publicationsRoutes = require('./src/publications/routes');
const usersRoutes = require('./src/users/routes');

const app = express();

const port = 3000;

app.get('/', function(req, res ){
    res.send('HOLA MUNDO');
});

app.use(placesRoutes);
app.use(usersRoutes);

app.use(publicationsRoutes);

app.listen(port, () => {
    console.log('api is running in port', port);
});