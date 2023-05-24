const db = require("../models");
const Message = db.messages;
const Member = db.members;
const Member2 = db.members;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {  
    Message.findAll({attributes: { exclude: ['createdAt', 'updatedAt']}, include: [
      {
        model: Member,
        as: 'receiver', // Alias 1
        attributes: {exclude: ['createdAt', 'updatedAt']},
        //where: { user_id: receiver_id }, // condition 1
      }, {
        model: Member,
        as: 'sender', // Alias 2
        attributes: {exclude: ['createdAt', 'updatedAt']},
        //where: { user_id: sender_id }, // condition 2 as needed
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

