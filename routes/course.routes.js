const courseController = require("../controllers/course.controller")
const express = require('express');
const router = express.Router();


router.route('/')
    .get(courseController.getAllCourses)
    .post(courseController.createCourse)

router.route('/:id')
    .get(courseController.getCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse)


module.exports= router;
