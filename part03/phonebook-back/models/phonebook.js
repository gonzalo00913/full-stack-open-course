const mongoose = require('mongoose')
//const uniqueValidator = require('mongoose-unique-validator');
require('dotenv').config()

// eslint-disable-next-line no-undef
const URI = process.env.URI_MONGO

mongoose.set('strictQuery', true)
mongoose.connect(URI)
  .then(() =>{
    console.log('base de datos conectada')
  })
  .catch(() =>{
    console.log('error la conectarse a la base de datos')
  })


const phonebookSchema = new mongoose.Schema({
  name:{
    type: String,
    minlength: 3,
    //unique: true,
    require:true
  },
  number:{
    type: Number,
    minlength: 8,
    require:true
  }, 
  date: Date
})

//phonebookSchema.plugin(uniqueValidator);

phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})
  


module.exports = mongoose.model('Phonebook', phonebookSchema)