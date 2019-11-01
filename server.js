const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
mongoose.connect('mongodb://localhost/phonebook')
    .then(() => console.log("database connected.."))
    .catch(err => console.error("couldnt connected to database...", err))

const app = express();
const bodyParser = require('body-parser')
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(express.urlencoded());
app.set('views', './views');
app.set("view engine", "ejs");
app.use(express.static('public'));
const Customer = require('./routes/api/v1/customer')

app.use('api/v1/users', Customer);


app.listen(process.env.PORT || 3000, (err) => {
    console.log("server started");
    if (err)
        console.log(err);
});