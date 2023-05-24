module.exports = app => {
    const demands = require("../controllers/demand.controller.js");
  
    var router = require("express").Router();
    
    // Retrieve all Demands
    router.get("/", demands.findAll);
  
    app.use('/api/demands', router);
  };
  