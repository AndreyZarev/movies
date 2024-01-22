const express = require('express');
const path = require('path');
function configExpress(app) {
    app.use(express.static(path.resolve('scr/static')));
    return app
    
}

module.exports = configExpress