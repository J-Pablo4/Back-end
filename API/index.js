const express = require('express');
const placesRoutes = require('./src/places/routes');
const publicationsRoutes = require('./src/publications/routes');
const usersRoutes = require('./src/users/routes');

const app = express();

const port = 3000;

app.use(publicationsRoutes);

app.get('', function(req, res ){
    res.sendFile(_dirname + '/places/index.html');
});

app.use(placesRoutes);
app.use(usersRoutes);

app.listen(port, () => {
    console.log('api is running in port', port);
});