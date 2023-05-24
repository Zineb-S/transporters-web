module.exports = app => {
    const reviews = require("../controllers/review.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Reviews
    router.get("/", reviews.findAll);
  
    app.use('/api/reviews', router);
  };
  