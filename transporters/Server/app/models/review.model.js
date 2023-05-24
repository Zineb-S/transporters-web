module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("reviews", {
      review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      review_client_id: {
        type: Sequelize.INTEGER
      },
      review_driver_id: {
        type: Sequelize.INTEGER
      },
      review_content: {
        type: Sequelize.STRING
      },
    });
  
    return Review;
  };