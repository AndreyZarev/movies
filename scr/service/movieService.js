const Movie = require('../models/Movie')

const movies = [
    {
        _id: 1,
        title: 'Home Alone',
        genre: 'Genre: Comedy',
        director: 'Sam Johvonen',
        imageUrl: '.././img/home-alone.jpeg',
        year: '2323',
        rating: '5',
        description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France.But the youngest in the family, Kevin(Macaulay Culkin), got into a scuffle with his older brother Buzz(Devin Ratray) and was sent to his room, which is on the third floor of his house.Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself.Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry(Joe Pesci) and Marv(Daniel Stern), about to rob his house on Christmas Eve.Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice."
}
];

exports.getAll = () => {
    return [...movies]
}


exports.create = (movieData) => {
   
  const created = Movie.create(movieData);
    return   created;

};

exports.getOne = (movieId) => {

    let correctOne
    // const movie = movies.find(movie => movies._id == movieId);
    const movie = movies.forEach(movie => {

        if (movie._id == movieId) {
            correctOne = movie

        }
    });

    return correctOne;
};

exports.search = (title, genre, year) => {
let moviesResult = movies.slice()
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