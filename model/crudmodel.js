const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    role:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    }
    
})
let crudmodel = mongoose.model('Crud', crudschema)
module.exports = crudmodel