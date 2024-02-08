const router = require('express').Router()
const moviesService = require('./../service/movieService')
const {isAuth} = require('../middleware/authMiddleware')


router.get('/', async (req, res) => {
    const movies = await moviesService.getAll().lean();
    res.render("home", {movies});
});

router.get('/search', async (req, res) => {
    
    const {title, genre, year} = req.query
    const movies = await moviesService.search(title, genre, year).lean();
  
    res.render("search", { movies, title, genre, year});
});

router.get("/movie/:movieId/edit", isAuth,async (req, res) => {


    const movieId = req.params.movieId
      const movie = await moviesService.getOne(movieId).lean();
    
    res.render("movies/edit", { movie });
});

router.post('/movie/:movieId/edit',isAuth, async (req, res) => {
const movieData = req.body
const movieId = req.params.movieId

await moviesService.edit(req.params.movieId, movieData)
res.redirect(`/movies/${movieId}`)
})
//just commit
module.exports = router
