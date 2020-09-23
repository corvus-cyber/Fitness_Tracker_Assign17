const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //This will hold the date for the workout
    day: {
        type: Date, 
        default: Date.now
    },
    //This will hold the total duration which will be crafted via for loop in the api-routes file
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [{
        //User chooses between cardio or resistence training
        type: {
            type: String,
            trim: true,
            required: "Please choose a form of exercise"
        },
        name: {
        //Used in both forms, has user choose a name for the exercise 
            type: String,
            trim: true,
            required: "Give the exercise a name"
        },
        //Used in both forms, has user type how long they performed exercise
        duration: {
            type: Number,
            required: "State how long this exercise occured"
        },
        //these were written out as used by either one form or the other, will not have them be required
        //The remaining variables for the resistence form
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        //The remaining variable for the cardio form
        distance: {
            type: Number
        }

    }],

});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
