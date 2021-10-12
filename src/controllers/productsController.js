const db = require('../database/models');
const multer = require('multer');



const productsController = {
    create : (req,res) => {
            res.render('./products/create')   
    },
    store : (req,res) => {
        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            imagen: req.file.filename,
            fechaCreacion: req.body.fechaCreacion
        }
        res.send(producto)
    },
    edit : (req,res) => {
        res.render('./products/edit');
    },
    detail: (req,res) => {
        db.Producto.findOne({
            where: {id: req.params.id}
        }).then((producto)=> {
            if(producto) {
                return res.render('./products/guitars', {producto:producto})
            }
        })
    },
    accessories: (req,res) => {
        res.render('./products/acces');
    },
    amplifiers: (req,res) => {
        res.render('./products/amps');
    },
    bass: (req,res) => {
        res.render('./products/bass');
    },
    fx: (req,res) => {
        res.render('./products/fxs');
    },
    guitars: (req,res) => {
        res.render('./products/guitars')
    },
    vintage: (req,res) => {
        res.render('./products/vintage')
    }

}

module.exports = productsController;