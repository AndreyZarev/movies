const router = require('express').Router()
const moviesService = require('./../service/movieService')
const movies = moviesService.getAll()
router.get('/', (req, res) => {
    res.render("home");
});

module.exports = router
