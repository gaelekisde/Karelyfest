const express = require('express');
const app = express();
//"start": "node app"
app.set('view engine', 'ejs');

// Middleware para decodificar datos de formularios
app.use(express.urlencoded({ extended: false }));

// Middleware para decodificar datos JSON
app.use(express.json());

//
app.use('/', require('./router'));

const port = 5000;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});