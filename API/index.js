const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const apiRoutes = require('./src/api');
const multer = require('multer');

const app = express();

const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(multer({
    dest: path.join( __dirname, 'public/uploads')
}).single('photo'));
app.use(apiRoutes);

const uri = 'mongodb+srv://ITESO2022:fKsEI9EjOz82JkAL@cluster0.waa3jjj.mongodb.net/Top_TripDB?retryWrites=true&w=majority';

mongoose.connect(uri, (err) => {
    if(!err){
        console.log('se conecto a la base de datos');
        app.listen(port, () => {
            console.log('api is running in port ' + port);
        })
    }else{
        console.log('Fallo al conectarse a la base de datos', err);
    }
});
