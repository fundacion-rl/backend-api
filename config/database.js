const mogosee = require('mongoose')

mogosee.connect(
    process.env.MONGO_CONNECT,
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }
)
.then( () => console.log('Se ha conectado a la base de datos con EXITO!')) 
.catch( error => console.log(error)) 