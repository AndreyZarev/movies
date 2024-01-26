const mongoose = require('mongoose');



const movieSchema = mongoose.Schema({
    title :{
        type: 'String',
        required: true,
    },
genre : {
    type: 'String',
    required: true,
},

director : {
    type: 'String',
    required: true,
} ,
 year :{
    type: 'Number',
    required: true,
    min: 1900,
    max: 2030,
 } ,

rating : {
    type: 'Number',
    required: true,
    min: 0,
    max: 5,
},

 description: {
    type: 'String',
    required: true,
    max: 1000,
 },
  imageURL: {
    type: 'String',
    required: true,
    // validate:
  },
  cast: {

  } 
})