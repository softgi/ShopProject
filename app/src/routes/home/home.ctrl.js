"use strict";

const User = require("../../models/User")

const output = {
    home: (req, res) => {
        res.render("./home/index");
    },
    login: (req, res) => {
        res.render("./home/login");
    },
};

const process = {
    login: async (req, res)=>{
        const user = new User(req.body);
        const response = await user.login();
        if (response.err)
            return response.success;
        else 
            return res.json(response);
    },
    
}
module.exports = {
    output,
    process
}