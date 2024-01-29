const router = require('express').Router()
const movieService = require('../service/movieService')


router.get('/about', (req, res) => {
    res.render("about", { layout: false });
});

// :movieID
router.get('/movies/:movieId', async (req, res) => {

    const movieId = req.params.movieId
   

const movie = await movieService.getOne(movieId).lean();
const ratingNum = Number(movie.rating);

movie.rendering = new Array(ratingNum)
movie.rendering.fill(true)

res.render("details", {movie, layout: false});
});



module.exports = router