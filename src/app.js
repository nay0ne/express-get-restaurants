const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll({});
        res.json(restaurants);
    } catch(error) {
        next(error);
    }
});
//  get particular restaurant
app.get('/restaurants/:id', async (req, res) => {
    const id = req.params.id;
    gimme = await Restaurant.findByPk(id);
    res.json(gimme);
});


module.exports = app;