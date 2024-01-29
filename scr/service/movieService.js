const Movie = require('../models/Movie')


exports.getAll =  () => {
    const all =  Movie.find()
 
    return all
}


exports.create = (movieData) => Movie.create(movieData);
   


exports.getOne = (movieId) => Movie.findById(movieId);


   
 

exports.search =  (title, genre, year) => {
let moviesResult =  Movie.find()

    if (title) {
        moviesResult = moviesResult.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
    }

    if (genre) {
        moviesResult = moviesResult.filter(movie => movie.title.toLocaleLowerCase().includes(genre.toLocaleLowerCase()))
            }

    if (year) {
        moviesResult = moviesResult.filter(movie => movie.year == year)
                    }   

                   
                    return moviesResult;      
};