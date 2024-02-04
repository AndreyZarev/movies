const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
function configExpress(app) {
    app.use(express.static(path.resolve('scr/static')));
    app.use(express.urlencoded({extended: false}));
    return app
    
}

module.exports = configExpress