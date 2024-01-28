const router = require('express').Router()
const moviesService = require('./../service/movieService')


router.get('/', (req, res) => {
    const movies = moviesService.getAll()
    res.render("home", {movies});
});

router.get('/search', (req, res) => {
    
    const {title, genre, year} = req.query
    const movies = moviesService.search(title, genre, year)
    console.log(movies);
    res.render("search", { movies, layout: false });
});

module.exports = router
