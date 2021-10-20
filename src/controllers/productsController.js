const db = require('../database/models');
const multer = require('multer');



const productsController = {
    create : (req,res) => {
            res.render('./products/create')   
    },
    store : (req,res) => {
        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            categoria: req.body.categoria,
            imagen: req.file.filename,
            fecha_creacion: req.body.fechaCreacion
        })
        .catch((e) => {
            console.log(e)
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
                return res.render('./products/detail', {producto:producto})
            }
        })
    },
    accessories: (req,res) => {
        db.Producto.findAll({
            where: {categoria: "Accesorio", eliminado:0
        }
        }).then((producto) => {
            res.render('./products/list', {productos: producto, categoria: "Accesorios"})
        })  
    },
    amplifiers: (req,res) => {
        db.Producto.findAll({
            where: {categoria: "Amplificador", eliminado:0
        }
        }).then((producto) => {
            res.render('./products/list', {productos: producto, categoria: "Amplificadores"})
        })  
    },
    bass: (req,res) => {
        db.Producto.findAll({
            where: {categoria: "Bajo", eliminado:0
        }
        }).then((producto) => {
            res.render('./products/list', {productos: producto, categoria: "Bajos"})
        })  
    },
    fx: (req,res) => {
        db.Producto.findAll({
            where: {categoria: "FX", eliminado:0
        }
        }).then((producto) => {
            res.render('./products/list', {productos: producto, categoria: "Efectos"})
        })  
    },
    guitars: (req,res) => {
        db.Producto.findAll({
            where: {categoria: "Guitarra", eliminado:0
        }
        }).then((producto) => {
            res.render('./products/list', {productos: producto, categoria: "Guitarras"})
        })
    },
    vintage: (req,res) => {
        db.Producto.findAll({
            where: {categoria: "Vintage", eliminado:0
        }
        }).then((producto) => {
            res.render('./products/list', {productos: producto, categoria: "Vintage"})
        })
    }

}

module.exports = productsController;