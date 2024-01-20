const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');


const port = 5000
const app = express();

app.engine("hbs", handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', "hbs");
app.set('view', path.join(__dirname, 'src', 'views'));
    

app.get('/', (req, res) =>{
app.router()
});

app.listen(port, ()=> console.log(`Server has been sucsessfully lauched on port ${port}`))