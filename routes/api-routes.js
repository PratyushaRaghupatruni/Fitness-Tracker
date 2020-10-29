const express = require("express");
const router = express.Router();
const db=require("../models/exercise.js");

router.get("/api/workouts",function(req,res){
    db.find({})
    .then(dbWorkout => {

      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range",function(req,res){
    db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

//router.put("/api/workouts/:id", function(req, res) {

//});
module.exports = router;

