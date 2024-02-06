const router = require('express').Router()
const moviesService = require('./../service/movieService')


router.get('/', async (req, res) => {
    const movies = await moviesService.getAll().lean();
    res.render("home", {movies});
});

router.get('/search', async (req, res) => {
    
    const {title, genre, year} = req.query
    const movies = await moviesService.search(title, genre, year).lean();
  
    res.render("search", { movies, title, genre, year});
});

router.get("/movie/:movieId/edit", async (req, res) => {


//     
    if(!req.user){
        res.redirect("/auth/login")
    }
    const movieId = req.params.movieId
      const movie = await moviesService.getOne(movieId).lean();
    
    res.render("movies/edit", { movie });
});

module.exports = router
