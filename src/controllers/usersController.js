const fs = require('fs');
const path = require('path');

const usersController = {
    login: (req,res) => {
        res.render('./users/login')
    },
    signup: (req,res) => {
        res.render('./users/signup')
    },
    profile: (req,res) => {
        res.render('./users/profile')
    }
}

module.exports = usersController;