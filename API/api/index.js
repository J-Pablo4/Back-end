const express = require('express');

const apiRoutes = require('./api');

const app = express();

const port = 3000;

app.get('/', function(req, res ){
    res.send('HOLA MUNDO');
});

app.use(apiRoutes);

app.listen(port, () => {
    console.log('api is running in port', port);
});