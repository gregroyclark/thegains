//within one workout, you may have many [exercises]

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercise: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }],

    day: {
        type: Date,
        default: Date.now
    }
});

let Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;