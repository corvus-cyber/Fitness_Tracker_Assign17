const path = require("path");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"))
});

router.get("/statistics", (req, res) =>{
    res.sendFile(path.join(_dirname, "../public/stats.html"))
})

module.exports = router; 