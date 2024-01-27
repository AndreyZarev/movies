const router = require('express').Router()

const movieService = require('./../service/movieService')

router.get('/movie/create', (req, res) => {
    res.render("create");
});

router.post('/movie/create', (req, res) => {
   
    movieService.create(req.body);
    res.redirect('/')
});


module.exports = router
