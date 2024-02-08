const Movie = require('../models/Movie')


exports.getAll =  () => {
    const all =  Movie.find()
 
    return all
}


exports.create = (movieData) => Movie.create(movieData);
   


exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');


   
 

exports.search =  (title, genre, year) => {
let query = {}

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
       query.genre = genre.toLowerCase();
            }

    if (year) {
        query.year = year
                    }   

                   
                    return Movie.find(query);      
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId)



exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData) 