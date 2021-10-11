const db = require('../database/models');



const productsController = {
    create : (req,res) => {
            res.render('./products/formulario')   
    },
    store : (req,res) => {
          let productoPrueba ={
              nombre: req.body.name,
              precio: req.body.price,
              categoria: req.body.category,
              descripcion: req.body.description
          }

         res.send(productoPrueba)
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