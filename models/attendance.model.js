const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    courseCode: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    status: {
        type: String,
        required: true
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
