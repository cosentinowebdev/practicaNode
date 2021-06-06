//rutas para el producto
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productoController')


//api/producto
router.post('/', productosController.crearProducto);
module.exports = router;