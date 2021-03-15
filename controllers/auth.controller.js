const { response } =  require('express');
const Usuario = require('../models/usuario');
const bcryp = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const login = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const usuarioDB = await Usuario.findOne( { email } );

        //Verificar Email

        if( !usuarioDB ) {
            return res.status(400).json({
                ok:false,
                msg:'Email no valido'
            })
        }

        //Verificar contraseña

        const validPasword = bcryp.compareSync( password , usuarioDB.password );

        console.log('estatusDs: ', validPasword);

        if( !validPasword ) {
            return res.status(400).json({
                ok:false,
                msg: 'Contraseña no valida'
            })
        }

        //generar JSON Web Token
        const token = await generarJWT( usuarioDB.id )

        res.json({
            ok:true,
            token
        })
        
        
    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    login
}