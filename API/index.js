const express = require('express');
const publicationsRoutes = require('./src/publications/routes');

const app = express();

const port = 3000;

app.use(publicationsRoutes);

app.listen(port, () => {
    console.log('api is running in port', port);
});