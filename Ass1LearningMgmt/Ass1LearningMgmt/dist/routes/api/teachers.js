"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../../db");
const db_2 = require("../../db");
const db_3 = require("../../db");
/**
 * GET requests
 */
route.get('/', (req, res) => {
    db_1.Teacher.findAll({})
        .then((teachers) => {
        res.json(teachers);
    });
});
route.get('/:teacherId', (req, res) => {
    db_1.Teacher.findById(parseInt(req.params.teacherId))
        .then((teacher) => {
        res.json(teacher);
    });
});
//sajdldjldjsladjl
route.get('/:teacherId/batches', (req, res) => {
    `
`;
    db_1.Teacher.findById(parseInt(req.params.teacherId)).then((teacher) => {
        db_2.Subject.findAll({
            where: {
                subjectId: teacher.subjectId
            }
        }).then((subjects) => {
            db_3.Batch.findAll({
                where: {
                    courseId: subjects.courseId
                }
            });
        }).then((batches) => {
            res.send(batches);
        });
    });
});
/**
 * POST requests
 */
// Add new Teacher to the database
route.post('/', (req, res) => {
    db_1.Teacher.create({
        name: req.body.name,
        SubjectId: req.body.SubjectId
    })
        .then((teachers) => {
        res.send(teachers);
    });
});
/**
 * PUT requests
 */
// Update Teacher with given subject Id
route.put('/:teacherId', (req, res) => {
    db_1.Teacher.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.teacherId
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
// Delete Teacher with given subject Id
route.delete('/:teacherId', (req, res) => {
    db_1.Teacher.destroy({
        where: {
            id: req.params.teacherId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
exports.default = route;
