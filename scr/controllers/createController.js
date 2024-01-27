const router = require('express').Router()

const movieService = require('./../service/movieService')

router.get('/movie/create', (req, res) => {
    res.render("create");
});

router.post('/movie/create', (req, res) => {
   const newMovie = req.body
   debugger
    movieService.create(newMovie);
    res.redirect('/')
});


module.exports = router
