require( 'dotenv' ).config();
const expres = require('express');
const cors = require('cors')


const { dbConnection } = require('./database/config');

// crear el servidor expres
const app = expres();

//Configurar Cors
app.use(cors())

//Lectura del Body
app.use( expres.json() );

// Base de datos
dbConnection();

console.log(process.env);

//Rutas

app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));

app.listen( process.env.PORT ,()=> {
    console.log('Servidor Corriendo en puerto' + process.env.PORT);
});
