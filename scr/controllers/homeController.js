const router = require('express').Router()
const moviesService = require('./../service/movieService')


router.get('/', (req, res) => {
    const movies = moviesService.getAll()
    res.render("home", {movies});
});

module.exports = router
