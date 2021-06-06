const mongoose = require('mongoose');

const productosSchema = mongoose.Schema({
        nombre:{
            type: String,
            require:true
        },
        descripcion:{
            type: String,
            require:true
        },
        ubicacion:{
            type: String,
            require:true
        },
        precio:{
            type: Number,
            require:true
        },
        fechaDeCreacion:{
            type: Date,
            default: Date.now()
        }
    })

module.exports = mongoose.model('productos', productosSchema);