module.exports = app => {
    const members = require("../controllers/member.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Members
    router.get("/", members.findAll);
  
  
    app.use('/api/members', router);
  };
  