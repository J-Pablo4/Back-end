const express = require('express');

const apiRoutes = require('./src/api');

const app = express();

const port = process.env.PORT || 3000;



app.use(express.json());
app.use(apiRoutes);

app.get('/', function(req, res ){
    res.send('api works');
});

app.listen(port, () => {
    console.log('api is running in port', port);
});
