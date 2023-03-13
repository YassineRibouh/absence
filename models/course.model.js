const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    schedule: [{
        type: Date,
        required: true
    }]
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
