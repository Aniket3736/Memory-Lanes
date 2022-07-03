const express = require('express');
const Router = express.Router();
const {
    getAllMaps,
    getMap,
    deleteMap,
    postMap
} = require('../controllers/mapControllers');

Router.route('/')
.get(getAllMaps)
.post(postMap);

Router.route('/:id')
.get(getMap)
.delete(deleteMap);


module.exports = Router;