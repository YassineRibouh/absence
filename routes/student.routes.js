const StudentController = require("../controllers/student.controller")
const express = require('express');
const router = express.Router();


router.route('/')
    .get(StudentController.getAllStudents)
    .post(StudentController.createStudent)

router.route('/:id')
    .get(StudentController.getStudent)
    .patch(StudentController.updateStudent)
    .delete(StudentController.deleteStudent)


module.exports= router;
