module.exports = (sequelize, Sequelize) => {
    const Demand = sequelize.define("demands", {
      demand_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      demand_cargo: {
        type: Sequelize.STRING
      },
      demand_dimensions: {
        type: Sequelize.STRING
      },
      demand_truck_type: {
        type: Sequelize.STRING
      },
      demand_pickup_location: {
        type: Sequelize.STRING
      },
      demand_destination_location: {
        type: Sequelize.STRING
      },
      demand_date: {
        type: Sequelize.DATE
      },
      demand_payment_type: {
        type: Sequelize.STRING
      },
      demand_client_id: {
        type: Sequelize.INTEGER
      },
      demand_status: {
        type: Sequelize.STRING
      },
    });
  
    return Demand;
  };