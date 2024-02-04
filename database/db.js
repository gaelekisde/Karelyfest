const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fiesta'
})

conexion.connect((error)=>{
    if(error){
        console.log("el error es"+ error)
    } 
    console.log("conectado correctamente a la base de datos")
})

module.exports = conexion;