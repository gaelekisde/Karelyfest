const conexion = require('../database/db');

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const instauser = req.body.instauser;
    const telefono = req.body.telefono;
    const dresscode = req.body.dresscode;
    const mensaje = req.body.mensaje

    conexion.query('INSERT into invitados SET ?', { nombre: nombre, instauser: instauser, telefono: telefono, dresscode: dresscode, mensaje:mensaje},
    (error, results) => {
        if (error) {
            console.log(error);
        }
        res.redirect('/');
    });


}