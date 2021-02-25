require( 'dotenv' ).config();
const expres = require('express');
const cors = require('cors')


const { dbConnection } = require('./database/config');

// crear el servidor expres
const app = expres();

//Configurar Cors
app.use(cors())

// Base de datos
dbConnection();

console.log(process.env);

//Rutas
app.get('/', (req, res) => {
    res.json(
        {
            ok: true,
            msg: 'Hola Mundo'
        }
    );
});


app.listen( process.env.PORT ,()=> {
    console.log('Servidor Corriendo en puerto' + process.env.PORT);
});