const attendanceController = require("../controllers/attendance.controller")
const express = require('express');
const router = express.Router();


router.route('/')
    .get(attendanceController.getAllAttendances)
    .post(attendanceController.createAttendance)

router.route('/:id')
    .get(attendanceController.getAttendance)
    .patch(attendanceController.updateAttendance)
    .delete(attendanceController.deleteAttendance)


module.exports= router;
