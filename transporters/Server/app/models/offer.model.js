module.exports = (sequelize, Sequelize) => {
    const Offer = sequelize.define("offers", {
      offer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      driver_id: {
        type: Sequelize.STRING
      },
      demand_id: {
        type: Sequelize.STRING
      }
    });
  
    return Offer;
  };