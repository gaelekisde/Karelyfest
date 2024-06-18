const express = require('express');
const app = express();
//"start": "node app"
app.set('view engine', 'ejs');

// Middleware para decodificar datos de formularios
app.use(express.urlencoded({ extended: false }));

// Middleware para decodificar datos JSON
app.use(express.json());

app.use('/', require('./router'));

app.use(express.static('public'));

// Configurar ruta para renderizar tu archivo EJS
app.get('/', (req, res) => {
  // Puedes enviar datos a tu archivo EJS aquí
  res.render('index.ejs');
});
const port = 3241;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
