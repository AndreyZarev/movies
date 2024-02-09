const {Schema, model, MongooseError} = require('mongoose')

const bcrypt = require('bcrypt')
const { use } = require('../routes')

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        lowercase: true,
        match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Invalid email address!"],
        minLength: [8, "Min character have to be at least 8!"],
    },

    password: {
        type: String,
        required: true,
        minLength: [6, "Password must be at least 6 characters!"]
    },

  
})
userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 12)
console.log(hash);
    this.password = hash
})

userSchema.virtual("rePassword")
.set(function(value){
if (value !== this.password){

throw new MongooseError("Passwords do not match!")

}

})

const User = model("User", userSchema)

module.exports = User