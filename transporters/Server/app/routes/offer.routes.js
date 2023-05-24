module.exports = app => {
    const offers = require("../controllers/offer.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Offers
    router.get("/", offers.findAll);
  
    app.use('/api/offers', router);
  };
  