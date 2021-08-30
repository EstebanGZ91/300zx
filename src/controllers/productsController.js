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
    }
}

module.exports = productsController;