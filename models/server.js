const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // middlewares
        this.middlewares();
        // Rutas de mi aplicacion



        this.routes();
    }
    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        // direcctorio publico
        this.app.use( express.static('public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/userRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
          });
    }
}



module.exports = Server;