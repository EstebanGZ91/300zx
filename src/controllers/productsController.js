const fs = require('fs');
const path = require('path');

const productsController = {
    create : (req,res) => {
        res.render('./products/create');
    },
    edit : (req,res) => {
        res.render('./products/edit');
    },
    detail: (req,res) => {
        res.render('./products/detail');
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