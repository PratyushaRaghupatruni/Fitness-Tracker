const express = require("express");
const router = express.Router();
const db=require("../models/exercise.js");
//Endpoint to get the latest workouts
router.get("/api/workouts",(req,res)=>{
    db.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
//Endpoint to get the bashboard of the workouts
router.get("/api/workouts/range",(req,res) =>{
    db.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//Endpoint to post the workouts the user would like to do 
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

  //Endpoint to add the workout by user to the existing workouts
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

