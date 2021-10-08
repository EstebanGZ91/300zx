const fs = require('fs');
const path = require('path');
const db = require('../database/models');



const productsController = {
    create : (req,res) => {
        db.Categoria.findAll()
        .then(categorias => {
            return res.render('./products/create', {categorias: categorias})
        })   
    },
    store : (req,res) => {
        db.Producto.create({
            nombre: req.body.nombre,
            fecha_creacion: req.body.fechaCreacion,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            id_categoria: req.body.categoria
        })

        res.redirect('/')
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