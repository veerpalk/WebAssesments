"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../../db");
const db_2 = require("../../db");
/**
 * GET requests
 */
route.get('/', (req, res) => {
    db_1.Subject.findAll({})
        .then((subjects) => {
        res.send(subjects);
    });
});
route.get('/:subjectId', (req, res) => {
    db_1.Subject.findById(parseInt(req.params.subjectId))
        .then((subject) => {
        res.json(subject);
    });
});
route.get('/:subjectId/teachers', (req, res) => {
    db_1.Subject.findById(parseInt(req.params.subjectId))
        .then((subject) => {
        db_2.Teacher.findAll({
            where: {
                subjectId: subject.id
            }
        }).then((teachers) => {
            res.json(teachers);
        });
    });
});
/**
 * POST requests
 */
// Add new Subject to the database
route.post('/', (req, res) => {
    db_1.Subject.create({
        name: req.body.name,
        CourseId: req.body.CourseId
    })
        .then((subjects) => {
        res.send(subjects);
    });
});
/**
 * PUT requests
 */
// Update subject with given subject Id
route.put('/:subjectId', (req, res) => {
    db_1.Subject.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.subjectId
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
// Delete subject with given subject Id
route.delete('/:subjectId', (req, res) => {
    db_1.Subject.destroy({
        where: {
            id: req.params.subjectId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
exports.default = route;
