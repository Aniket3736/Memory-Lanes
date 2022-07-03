const coordinates = require('../models/coordinates');

const getAllMaps = async (req, res) => {
    const allCoordinates = await coordinates.find({});
    res.status(200).json({ allCoordinates });
}

const postMap = async (req, res) => {
    try {
        const coordinate = new coordinates(req.body);
        const data = await coordinate.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(401).json({
            error
        });
    }
}

const deleteMap = async (req, res) => {
    try {
        const {id: mapId} = req.params;
        const coordinate = await coordinates.findOne({
            _id: mapId
        });
        await coordinate.remove();
        res.status(200).json(coordinate);
    } catch (error) {
        console.log(error);
    }
}

const getMap = async (req, res) => {
    try {
        const {id: mapId} = req.params;
        const coordinate = await coordinates.findOne({_id: mapId});
        res.status(200).json(coordinate);
    } catch (error) {
        res.status(401).json(error);
    }
}

module.exports = {
    getAllMaps,
    postMap,
    deleteMap,
    getMap
};