const express = require('express');
const conectarDB =  require('./config/db')

//creamos el servidor
const app = express();

//conectar a la base de datos
conectarDB();

//api que crea un producto
app.use('/api/productos', require('./routes/productos'));

//definimos ruta principal
/*
app.get('/', (req,res) =>
    {
        res.send('hola mundo');
    }
);
*/

app.listen(4000, () => 
    {
        console.log('El servidor esta corriendo perfectamente');
    }
)
