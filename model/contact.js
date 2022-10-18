const mongoose = require ('mongoose')
const schema = mongoose.Schema()
const contatschema ={
    name: String,
      age: Number,
      favoriteFoods: [String]
}
const contacta = mongoose.model("contacta",contatschema)
module.exports = contacta