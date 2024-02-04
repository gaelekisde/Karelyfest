const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'bukmhhni0qtdscb449ve-mysql.services.clever-cloud.com',
    user: 'us57h2fxzhwlrw9p',
    password: 'GxBpISd8x4kg2q9aDlOx',
    database: 'bukmhhni0qtdscb449ve'
})

conexion.connect((error)=>{
    if(error){
        console.log("el error es"+ error)
    } 
    console.log("conectado correctamente a la base de datos")
})

module.exports = conexion;