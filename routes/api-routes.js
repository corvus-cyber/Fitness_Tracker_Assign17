const router = require("express").Router();
const Workout = require("../models/workout.js");

//Allows user to create a new workout
router.post("/api/workouts", (req, res) =>{
    Workout.create({})
    .then(workoutDataBase => {
        res.json(workoutDataBase)
    })
    .catch(error =>{
        res.json(error)
    })
});

//Allows the user to add exercises to their workout
router.put("/api/workouts/:id", (req, res) =>{
    Workout.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}}, { new: true , runValidators: true }
    )
    .then(workoutDataBase => {
        res.json(workoutDataBase)
    })
    .catch(error =>{
        res.json(error)
    })
})

//Presents stats to the user on the index.html
router.get("/api/workouts", (req, res) =>{
    Workout.find({})
    .then(workoutDataBase => {
        //This bit of code was made possible by fellow student Yakini, who explained that in order for the total duration to function we'd need to create a for loop
        workoutDataBase.forEach(indWorkout => {
          let totalTime =0 ;
          indWorkout.exercises.forEach(exercises => {
           totalTime += exercises.duration;
          })
          indWorkout.totalDuration = totalTime;
        })
        res.json(workoutDataBase);
    })
    .catch(error =>{
        res.json(error)
    })
});

//This establishes the route so that we can see data within the stats.html page
router.get("/api/workouts/range", (req, res) =>{
    Workout.find({}).limit(7)
    .then(workoutDataBase =>{
        res.json(workoutDataBase)
    })
    .catch(error =>{
        res.json(error)
    })
})


module.exports = router;
