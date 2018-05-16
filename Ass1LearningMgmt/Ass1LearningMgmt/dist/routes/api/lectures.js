"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//VEERPALKAUR 3147229
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../../db");
/**
 * GET requests
 */
route.get('/', (req, res) => {
    db_1.Lecture.findAll({})
        .then((lectures) => {
        res.json(lectures);
    });
});
route.get('/:lectureId', (req, res) => {
    db_1.Lecture.findById(parseInt(req.params.lectureId))
        .then((lecture) => {
        res.json(lecture);
    });
});
/**
 * POST requests
 */
// Add new Lecture to the database
route.post('/', (req, res) => {
    db_1.Lecture.create({
        name: req.body.name,
        BatchId: req.body.BatchId,
        TeacherId: req.body.TeacherId,
        SubjectId: req.body.SubjectId
    })
        .then((lectures) => {
        res.send(lectures);
    });
});
/**
 * PUT requests
 */
// Update Lecture with given lecture Id
route.put('/:lectureId', (req, res) => {
    db_1.Lecture.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.lectureId
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
// Delete Lecture with given lecture Id
route.delete('/:lectureId', (req, res) => {
    db_1.Lecture.destroy({
        where: {
            id: req.params.lectureId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
exports.default = route;
