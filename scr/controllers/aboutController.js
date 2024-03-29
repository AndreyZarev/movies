const router = require('express').Router()
const movieService = require('../service/movieService')
const castService = require('../service/castService')
const { isAuth } = require('../middleware/authMiddleware')

router.get('/about', (req, res) => {
    res.render("about");
});

// :movieID
router.get('/movies/:movieId', async (req, res) => {

    const movieId = req.params.movieId
 

const movie = await movieService.getOne(movieId).lean();
const isUser = movie.owner == req.user?._id

const ratingNum = Number(movie.rating);

movie.rendering = new Array(ratingNum)
movie.rendering.fill(true)

res.render("details", {movie, isUser});
});


router.get('/movies/:movieId/attach',isAuth, async (req, res) => {
const movie = await movieService.getOne(req.params.movieId).lean();
const casts = await castService.getAll().lean();
    res.render("movies/attach", {...movie, casts});
})

router.post('/movies/:movieId/attach',  async (req, res) => {

    const castId = req.body.castId;
    const movie = await movieService.getOne(req.params.movieId)

    movie.casts.push(castId)
    await movie.save()

    res.redirect(`/movies/${movie._id}/attach`)
})

router.get('/movies/:movieId/delete', async (req, res) => {
    
    await movieService.delete(req.params.movieId)
    res.redirect("/")
});


module.exports = router