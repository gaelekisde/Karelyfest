const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Middleware para decodificar datos de formularios
app.use(express.urlencoded({ extended: false }));

// Middleware para decodificar datos JSON
app.use(express.json());

// Asegúrate de usar la ruta adecuada para el enrutador
app.use('/', require('./router'));

const port = process.env.PORT || 3306;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
