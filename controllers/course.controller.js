const courseModel = require('../models/course.model');
const handler = require('./handlerFactory');

// get  all students
exports.getAllCourses= handler.getAll(courseModel)
// add student
exports.getCourse = handler.getOne(courseModel)
// remove student
exports.deleteCourse = handler.deleteOne(courseModel);
// update
exports.updateCourse = handler.updateOne(courseModel);
// create Student
exports.createCourse = handler.createOne(courseModel);
