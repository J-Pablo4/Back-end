const express = require('express');
const placesRoutes = require('./src/places/routes');

const app = express();

const port = 3000;

app.get('', function(req, res ){
    res.sendFile(_dirname + '/places/index.html');
});

app.use(placesRoutes);

app.listen(port, () => {
    console.log('api is running in port', port);
});