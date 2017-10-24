const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get("/", (req, res) => {
  burger.selectAll((data)=> {
    let hbsObject = {
      burgers: data
    };

    res.render('index', hbsObject);
  });
});

router.post("/burgers", (req, res) => {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], (data) => {
    res.redirect('/');
  });
});

router.put('/burgers/:id', (req, res) => {
  let condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: true,
  }, condition, (data) => {
    res.redirect('/');
  });
});

module.exports = router;
