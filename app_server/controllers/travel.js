var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Getaways", trips});
};

module.exports = {
    travel
};