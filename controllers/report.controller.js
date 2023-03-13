const reportModel = require('../models/report.model');
const handler = require('./handlerFactory');

// get  all students
exports.getAllReports= handler.getAll(reportModel)
// add student
exports.getReport = handler.getOne(reportModel)
// remove student
exports.deleteReport = handler.deleteOne(reportModel);
// update
exports.updateReport = handler.updateOne(reportModel);
// create Student
exports.createReport = handler.createOne(reportModel);
