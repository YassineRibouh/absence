const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const reportSchema = new mongoose.Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    percentageAttended: {
        type: Number,
        required: true
    },
    classesMissed: {
        type: Number,
        required: true,
        default: 0
    }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
