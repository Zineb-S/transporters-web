const db = require("../models");
const Offer = db.offers;
const Member = db.members;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {  
    Offer.findAll({attributes: { exclude: ['createdAt', 'updatedAt']}, include: {
      model: Member, attributes: { exclude: ['createdAt', 'updatedAt']}}},)
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

