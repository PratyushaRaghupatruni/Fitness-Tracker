const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
     exercises :[{
        type: {
         type: String,
         trim: true,
         required: "Enter the type of exercise: Cardio or Resistance"
      },
        name: {
          type:String,
          trim: true,
          required: "Enter the name of the workout"
              },
        duration:{
            type:Number,
            required: "Enter the time duration"   
        },
        weight:{
            type:Number
        },
        reps:{
            type:Number
        },
        sets:{
            type:Number
        },
        distance:{
            type:Number
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
