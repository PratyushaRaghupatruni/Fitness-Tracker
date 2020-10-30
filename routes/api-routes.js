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

router.get("/api/workouts/range",(req,res) =>{
    db.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
      .then(dbWorkout => {
          console.log("Exercises are" + dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.put("/api/workouts/:id", function({body,params}, res) {
    db.findOneAndUpdate({ _id: params.id },{$push: { exercises: body }})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;

