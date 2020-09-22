const router = require("express").Router();
const Workout = require("../models/workout.js");

//Allows user to create a new workout
router.post("/api/workouts", (req, res) =>{
    Workout.create({})
    .then(workoutDataBase => {
        res.json(workoutDataBase)
    })
});

//Allows the user to add exercises to their workout
router.put("/api/workouts/:id", (req, res) =>{
    Workout.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}}
    )
    .then(workoutDataBase => {
        res.json(workoutDataBase)
    })
})

//Presents stats to the user on the index.html
router.get("/api/workouts", (req, res) =>{
    Workout.find({})
    .then(workoutDataBase => {
        //This bit of code was made possible by fellow student Yakini, who explained that in order for the total duration to function we'd need to create a for loop
        workoutDataBase.forEach(totalWorkoutTime => {
          var totalTime =0 ;
          totalWorkoutTime.exercises.forEach(exercises => {
           totalTime += exercises.duration;
          })
          totalWorkoutTime.totalDuration = totalTime;
        })
        res.json(workoutDataBase);
      })
});

//This establishes the route so that we can see data within the stats.html page
router.get("/api/workouts/range", (req, res) =>{
    Workout.find({}).limit(7)
    .then(workoutDataBase =>{
        res.json(workoutDataBase)
    })
})


module.exports = router;
