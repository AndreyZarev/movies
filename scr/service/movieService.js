const movies = [
//     {
//     title: 'fdsf',
//     genre: 'fdsfds',
//     director: 'xczxczx',
//     imageUrl: '.././img/jungle-cruise.jpeg',
//     year: '2323',
//     rating: '2',
//     description: 'wesdsdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
  
// }
];

exports.getAll = () => {
    return movies.slice()
}
exports.create = (movieData) => {
   
    movies.push({movieData});
    console.log(movies);
}


