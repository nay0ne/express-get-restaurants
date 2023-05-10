const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");
//  to parse request body containing JSON objs-
app.use(express.json());
// to parse request body with URL encoded values-
app.use(express.urlencoded({extended:true}));
//TODO: Create your GET Request Route Below: 
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll({});
        res.json(restaurants);
    } catch(error) {
        next(error);
    }
});
//  get particular restaurant- Epress Restaurantds pt 2
app.get('/restaurants/:id', async (req, res) => {
   try { 
        const id = req.params.id;
        gimme = await Restaurant.findByPk(id);
        res.json(gimme);
    } catch(error) {
        next(error);
    }
});

// add new restaurant
app.post('/restaurants', async (req, res, next) => {
    try {

    } catch(error) {
        next(error);
    }
});

//  update a restaurant
app.put('/restaurants', async (req, res) => {
    try {

    } catch(error) {
        next(error);
    }
});


module.exports = app;