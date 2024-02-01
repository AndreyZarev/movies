
const Cast = require('../models/Cast')

exports.getAll = () => Cast.find()


exports.create = (movieData) => Cast.create(movieData);