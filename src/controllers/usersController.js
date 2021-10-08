const fs = require('fs');
const path = require('path');

const usersController = {
    login: (req,res) => {
        res.render('./users/login')
    },
    register: (req,res) => {
        res.render('./users/register')
    },
    profile: (req,res) => {
        res.render('./users/profile')
    }
}

module.exports = usersController;