const db = require("../models");
const Review = db.reviews;
const Member = db.members;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {  
    Review.findAll({attributes: { exclude: ['createdAt', 'updatedAt']}, include: [
      {
        model: Member,
        as: 'client', // Alias 1
        attributes: {exclude: ['createdAt', 'updatedAt']},
      }, {
        model: Member,
        as: 'driver', // Alias 2
        attributes: {exclude: ['createdAt', 'updatedAt']},
      }] },)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


