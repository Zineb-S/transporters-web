module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("messages", {
      message_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      offer_id: {
        type: Sequelize.INTEGER
      },
      sender_id: {
        type: Sequelize.INTEGER
      },
      receiver_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      message_text: {
        type: Sequelize.STRING
      },
      message_date: {
        type: Sequelize.DATE
      }
    });
  
    return Message;
  };