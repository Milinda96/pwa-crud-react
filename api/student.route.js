const express = require('express');
const studentRoutes = express.Router();

let Student = require('./student.model');

studentRoutes.route('/add').post((req, res) => {
    let student = new Student(req.body);
    student.save().then(student => {
        res.status(200).json({ 'student': 'Successfuly Added' });
    }).catch(err => {
        res.status(400).send('Unable to save data');
    });
});

studentRoutes.route('/').get((req, res) => {
    Student.find((err, student) => {
        if (err) {
            console.log(err);
        } else {
            res.json(student);
        }
    });
});

studentRoutes.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Student.findById(id, (err, student) => {
        res.json(student)
    });
});

studentRoutes.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (!student) {
            res.status(404).send('Data is not found');
        } else {
            student.student_name = req.body.student_name;
            student.school_name = req.body.school_name;
            student.class_name = req.class_name;

            student.save().then(student => {
                res.json('Update Completed');
            }).catch(err => {
                res.status(400).send('Unable to update DB');
            });
        }
    });
});

studentRoutes.route('/delete/:id').get((req, res) => {
    let id = req.params.id;
    Student.findByIdAndRemove(id, (err, student) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Successfully Removed');
        }
    });
});

module.exports = studentRoutes;