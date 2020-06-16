const db = require("../models/workout.js");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res){
        db.find()
        .then(function(records){
            console.log("Find route", records);
            res.json(records);
        });
    });

    app.put("/api/workouts/:id", function(req, res){
        db.findByIdAndUpdate(req.params.id, {
            $push: {
                exercise: req.body
            }
            // {
            //     new: true
            // }
        })
        .then(function(records){
            console.log("Find by id and update", records);
            res.json(records);
        });
    });

    app.post("/api/workouts", function(req, res){
        db.create(req.body)
        .then(function(records){
            console.log("post", records);
            res.json(records);
        });
    });

    app.get("/api/workouts/range", function(req, res){
        db.find({}).limit(7)
        .then(function(records){
            console.log("findRange", records);
            res.json(records);
        });
    });


};