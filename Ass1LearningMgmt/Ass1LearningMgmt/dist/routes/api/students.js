"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../../db");
/**
 * GET requests
 */
// Fetch all Students from database
route.get('/', (req, res) => {
    db_1.Student.findAll({})
        .then((students) => {
        res.json(students);
    });
});
// Fetch Student with student Id
route.get('/:studentId', (req, res) => {
    db_1.Student.findById(parseInt(req.params.studentId))
        .then((student) => {
        res.json(student);
    });
});
//Watch It
route.get('/:studentId/batches', (req, res) => {
    db_1.Student.findById(parseInt(req.params.studentId))
        .then((student) => {
        student.getBatches().then((batches) => {
            res.json(batches);
        });
    });
});
/**
 * POST requests
 */
// Add new student to the database
route.post('/', (req, res) => {
    db_1.Student.create({
        name: req.body.name,
    })
        .then((students) => {
        res.send(students);
    });
});
/**
 * PUT requests
 */
// Update student with given student Id
route.put('/:studentId', (req, res) => {
    db_1.Student.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.studentId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
/**
 * DELETE requests
 */
// Delete student with given student Id
route.delete('/:studentId', (req, res) => {
    db_1.Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
exports.default = route;
