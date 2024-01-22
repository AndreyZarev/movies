const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const configHandlebars = require('./config/confingHandlebars')
const configExpress = require('./config/configExpress')

const port = 5000
const app = express();

configHandlebars(app)
configExpress(app)


app.use(routes)

app.listen(port, ()=> console.log(`Server has been sucsessfully lauched on port ${port}`))