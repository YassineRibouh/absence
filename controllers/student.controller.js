const studentModel = require('../models/student.model');
const handler = require('./handlerFactory');

// get  all students
exports.getAllStudents = handler.getAll(studentModel)
// add student
exports.getStudent = handler.getOne(studentModel)
// remove student
exports.deleteStudent = handler.deleteOne(studentModel);
// update
exports.updateStudent = handler.updateOne(studentModel);
// create Student
exports.createStudent = handler.createOne(studentModel);
