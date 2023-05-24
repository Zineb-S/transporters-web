const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    define: {
        defaultScope: {
          attributes: {
            exclude: ['created_at', 'updated_at']
          }
        }
      },
      timestamps: false 
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.demands = require("../models/demand.model.js")(sequelize, Sequelize);
db.offers = require("../models/offer.model.js")(sequelize, Sequelize);
db.messages = require("../models/message.model.js")(sequelize, Sequelize);
db.members = require("../models/member.model.js")(sequelize, Sequelize);
db.reviews = require("../models/review.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "admin-user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "admin-user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.members.hasMany(db.offers, {
  foreignKey: "driver_id",
});
db.offers.belongsTo(db.members, {
  foreignKey: "driver_id",
});

db.demands.belongsTo(db.members, {
  foreignKey: "demand_client_id",
});

db.messages.belongsTo(db.members, {
  as: 'sender',
  foreignKey: "sender_id",
});
db.messages.belongsTo(db.members, {
  as: 'receiver',
  foreignKey: "receiver_id",
});

db.reviews.belongsTo(db.members, {
  as: 'client',
  foreignKey: "review_client_id",
});
db.reviews.belongsTo(db.members, {
  as: 'driver',
  foreignKey: "review_driver_id",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
