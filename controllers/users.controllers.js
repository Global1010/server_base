const { response,request } = require('express');

const usuariosGet = (req = request, res= response) => {

    const {q, nombre, apikey, page=1, limit=10} = req.query;




    res.json({
        msg: 'get Api - UserControllers',
        q,
        nombre,
        apikey,
        page,
        limit
    });

};

const usuariosPut = (req, res= response) => {

    const { gid } = req.params;

    res.json({
        msg: 'put Api  - UserControllers',
        gid
    });
};

const usuariosPost = (req, res= response) => {

    const {nombre, edad } = req.body;


    res.json({
        msg: 'post Api  - UserControllers',
        nombre,
        edad
    });
};

const usuariosDelete = (req, res= response) => {
    res.json({
        msg: 'delete Api  - UserControllers'
    });
};

const usuariosPatch = (req, res= response) => {
    res.json({
        msg: 'patch Api  - UserControllers'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};