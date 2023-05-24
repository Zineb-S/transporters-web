module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define("users", {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      user_first_name: {
        type: Sequelize.STRING
      },
      user_last_name: {
        type: Sequelize.STRING
      },
      user_username: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_password: {
        type: Sequelize.STRING
      },
      user_phone: {
        type: Sequelize.DATE
      },
      user_type: {
        type: Sequelize.STRING
      }
    });
  
    return Member;
  };