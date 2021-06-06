const { findOneAndRemove } = require("../models/Producto.js");
const Producto = require("../models/Producto.js");

exports.crearProducto = async (req,res) => {
    try {
        let producto ;
        
        //creamos nuestro producto

        producto = new Producto(req.body);
        console.log(producto);
        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.obtenerProductos = async (req,res) => {
    try {
        const productos = await Producto.find();
        console.log(productos);
        res.json(productos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.actualizarProducto = async (req,res) => {
    try {
        const { nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            req.status(404).send({json:'producto no encontrado'});
        };
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({_id: req.params.id},producto,{new: true});
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.obtenerProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            req.status(404).send({json:'producto no encontrado'});
        }else{
            res.json(producto);
        };

        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}
exports.eliminarProducto = async (req,res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            req.status(404).send({json:'producto no encontrado'});
        };
        await Producto.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'producto eliminado con exito'});

        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}