const Meetup = require('../models/meetup');

module.exports.create = function(req, res) {
  const meetup = new Meetup(req.body);
  meetup.save((err, result) => {
    res.json(result);
  });
};

module.exports.list = function(req, res) {
  Meetup.find({}, (err, results) => {
    res.json(results);
  })
}