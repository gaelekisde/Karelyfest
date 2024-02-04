const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'id19904843_root',
    password: 'Guts321$$',
    database: 'id19904843_cbtis'
})

conexion.connect((error)=>{
    if(error){
        console.log("el error es"+ error)
    } 
    console.log("conectado correctamente a la base de datos")
})

module.exports = conexion;