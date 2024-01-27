const movies = [
    {
        _id: 1,
    title: 'fdsf',
    genre: 'fdsfds',
    director: 'xczxczx',
    imageUrl: '.././img/jungle-cruise.jpeg',
    year: '2323',
    rating: '2',
    description: 'wesdsdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
  
}
];

exports.getAll = () => {
    return [...movies]
}
exports.create = (movieData) => {
   movieData._id = Number(movies[movies.length - 1]._id) + 1;
    movies.push(movieData);
    console.log(movies);
}


