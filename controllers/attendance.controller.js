const attendanceModel = require('../models/attendance.model');
const handler = require('./handlerFactory');

// get  all students
exports.getAllAttendances= handler.getAll(attendanceModel)
// add student
exports.getAttendance = handler.getOne(attendanceModel)
// remove student
exports.deleteAttendance = handler.deleteOne(attendanceModel);
// update
exports.updateAttendance = handler.updateOne(attendanceModel);
// create Student
exports.createAttendance = handler.createOne(attendanceModel);
