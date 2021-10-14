
const db = require("../database/models");

const mainController = {
    index: (req,res) => {
        db.Producto.findAll({
            where: {eliminado: 0}
        })
        .then((productos) => {
            return res.render('index',{productos: productos})
        })
    },
    api: (req,res) => {
        res.render('index');
    }
    
}

module.exports = mainController;