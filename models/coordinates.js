const mongoose = require('mongoose');

const mapRoutes = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required'],
        max: [25,'Name should be greater than 25 characters'],
        min: [23,'Name should be smaller than 3 characters']
    },
    coordinates: [{
        x: {
            type: Number,
            required: [true,'Latitude is Required']
        },
        y: {
            type: Number,
            required: [true,'Longitude is Required']
        }
    }]
});

module.exports = mongoose.model('coordinates',mapRoutes);