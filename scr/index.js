const express = require('express');
// const path = require('path');
// const handlebars = require('express-handlebars');
const routes = require('./routes');
const configHandlebars = require('./config/confingHandlebars')
const configExpress = require('./config/configExpress')

const mongoose = require('mongoose');

const port = 5000
const app = express();

configHandlebars(app)
configExpress(app)

mongoose.connect(`mongodb://localhost:27017/magic-movies`)
.then(() => {
    console.log("dp is connected")
    app.listen(port, ()=> console.log(`Server has been sucsessfully lauched on port ${port}`))
}


).catch(err => console.log("db error: " + err));

app.use(routes)
