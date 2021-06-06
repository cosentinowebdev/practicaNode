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
exports.obtenerProducto = async (req,res) => {
    try {
        const productos = await Producto.find();
        console.log(productos);
        res.json(productos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }
}