const mysql = require('mysql');

 const conexion = mysql.createConnection({
     host: 'mysql-karelyfest.alwaysdata.net',
    user: '346512_free',
     password: 'adivinala',
     database: 'karelyfest_fiesta'
})

//   process.env.DB_NAME,
// process.env.DB_USER,
// process.env.DB_PW,

// const conexion = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'fiesta'
// })

conexion.connect((error)=>{
    if(error){
        console.log("el error es"+ error)
    } 
    console.log("conectado correctamente a la base de datos")
})

module.exports = conexion;