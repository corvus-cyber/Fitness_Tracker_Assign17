const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) =>{
    Workout.create({})
    .then(workoutDataBase => {
        res.json(workoutDataBase)
    })
});


router.put("/api/workouts/:id", ({params, body}, res) =>{
    Workout.findByIdAndUpdate(params.id, {$push:{exercises: body}}
    )
    .then(workoutDataBase => {
        res.json(workoutDataBase)
    })
})

router.get("/api/workouts", (req, res) =>{
    Workout.find({})
    .then(workoutDataBase =>{
        res.json(workoutDataBase)
    })
});


module.exports = router;
