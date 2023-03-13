const reportController = require("../controllers/report.controller")
const express = require('express');
const router = express.Router();


router.route('/')
    .get(reportController.getAllReports)
    .post(reportController.createReport)

router.route('/:id')
    .get(reportController.getReport)
    .patch(reportController.updateReport)
    .delete(reportController.deleteReport)


module.exports= router;
