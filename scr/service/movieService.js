const movies = [{
    title: 'fdsf',
    genre: 'fdsfds',
    director: 'xczxczx',
    year: '2323',
    rating: '2',
    description: 'wesdsdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
  
}
];

exports.create = (movieData) => {
   
    movies.push(movieData);
    console.log(movies);
}


