
const mongoose = require('mongoose')
const castSchema = new mongoose.Schema({

    name: {type: String,
    required: true,
    },
    age: {type: Number,
        required: true,
        max: 120,
        min: 0,
    },

    born: {type: String,
        required: true,
    },

    nameInMovie: {type: String,
        required: true,
    },


    castImage: {type: String,
    required: true,
    validate: {
     validator(value){
        return /^https?:\/\//.test(value)
},
message: (prop) => {`${prop.value} is not a valid`}
}
    }
})


const Cast = mongoose.model('Cast', castSchema)

module.exports = Cast