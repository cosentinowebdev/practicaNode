//rutas para el producto
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productoController');


//api/producto
router.post('/', productosController.crearProducto);
router.get('/', productosController.obtenerProductos);
router.put('/:id', productosController.actualizarProducto);
router.get('/:id', productosController.obtenerProducto);
router.delete('/:id', productosController.eliminarProducto);
module.exports = router;