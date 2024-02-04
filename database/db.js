const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'process.env.DB_USER',
    password: 'process.env.DB_PW',
    database: 'process.env.DB_NAME'
})
//   process.env.DB_NAME,
// process.env.DB_USER,
// process.env.DB_PW,
conexion.connect((error)=>{
    if(error){
        console.log("el error es"+ error)
    } 
    console.log("conectado correctamente a la base de datos")
})

module.exports = conexion;