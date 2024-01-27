const router = require('express').Router()
const movieService = require('../service/movieService')
router.get('/about', (req, res) => {
    res.render("about", { layout: false });
});
module.exports = router
// :movieID
router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
const movie = movieService.getOne(movieId)
res.render("details", {movie, layout: false});
});