const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status 
// and JSON message to the requesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        // uncomment the following line to show results of query
        // on the console
        // console.log(q);

    if (!q)
    { // Databse returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting in trip list
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};

// POST: /trips - Adds a new trip
// Regardless of outcome response must include HTML status and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
}};

const q = await newTrip.save();

    if (!q)
    { // Databse returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return new trip
        return res
            .status(201)
            .json(q);
    }   

    // uncomment the following line to show results of operation on the console
    // console.log(q);

// PUT: /trips/:code - Updates an existing trip
// Regardless of outcome response must include HTML status and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {

    // uncomment for debugging
    // console.log(req.params);
    // console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true } // Return the updated document
        )
        .exec();

        if (!q)
        { // Databse returned no data
            return res
                    .status(404)
                    .json(err);
        } else { // Return updated trip
            return res
                .status(201)
                .json(q);
        }

        // Uncomment the following line to show results of operation
        // on the console
        // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};