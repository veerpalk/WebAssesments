"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//VEERPALKAUR 3147229
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../../db");
const db_2 = require("../../db");
const db_3 = require("../../db");
const db_4 = require("../../db");
/**
 * GET requests
 */
route.get('/', (req, res) => {
    db_1.Course.findAll()
        .then((courses) => {
        res.json(courses);
    });
});
route.get('/:courseId', (req, res) => {
    db_1.Course.findById(parseInt(req.params.courseId))
        .then((course) => {
        res.json(course);
    });
});
route.get('/:courseId/batches', (req, res) => {
    db_2.Batch.findAll({
        where: {
            courseId: req.params.courseId
        }
    })
        .then((batches) => {
        if (batches) {
            res.status(200).json(batches);
        }
        else {
            res.status(404).json({
                error: 'No batch found'
            });
        }
    });
});
route.get('/:courseId/batches/:batchId', (req, res) => {
    db_2.Batch.find({
        where: {
            courseId: req.params.courseId,
            id: req.params.batchId
        }
    })
        .then((batch) => {
        if (batch) {
            res.status(200).json(batch);
        }
        else {
            res.status(404).json({
                error: 'No batch found'
            });
        }
    });
});
//Pleasee Check..
route.get('/:courseId/batches/:batchId/lectures', (req, res) => {
    db_2.Batch.findAll({
        where: {
            courseId: req.params.courseId,
            id: req.params.batchId
        },
    }).then((batches) => {
        db_3.Lecture.findAll({
            where: {
                batchId: batches.id
            }
        }).then(lectures => {
            res.send(lectures);
        });
    });
});
route.get('/:courseId/batches/:batchId/lectures/lectureId', (req, res) => {
    db_2.Batch.findAll({
        where: {
            courseId: req.params.courseId,
            id: req.params.batchId
        },
    }).then((batches) => {
        db_3.Lecture.findAll({
            where: {
                Id: req.params.lectureId,
                batchId: batches.id
            }
        }).then(lectures => {
            res.send(lectures);
        });
    });
});
route.get('/:courseId/batches/:batchId/students', (req, res) => {
    db_2.Batch.findAll({
        where: {
            courseId: req.params.courseId,
            id: req.params.batchId
        },
    }).then((batches) => {
        db_4.Student.findAll({
            where: {
                batchId: batches.id
            }
        }).then(students => {
            res.send(students);
        });
    });
});
//hdjlfjldfjlfjlfjlfjfl
route.get('/:courseId/batches/:batchId/teachers', (req, res) => {
    db_2.Batch.findAll({
        where: {
            courseId: req.params.courseId,
            id: req.params.batchId
        },
    }).then((batches) => {
        db_4.Student.findAll({
            where: {
                batchId: batches.id
            }
        }).then(students => {
            res.send(students);
        });
    });
});
/**
 *  POST requests
 */
// Add new course to database
route.post('/', (req, res) => {
    db_1.Course.create({
        name: req.body.name,
    })
        .then((courses) => {
        res.send(courses);
    });
});
/**
 * PUT requests
 */
// Update Course with given course Id
route.put('/:courseId', (req, res) => {
    db_1.Course.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.courseId
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
// Delete Course with given course Id
route.delete('/:courseId', (req, res) => {
    db_1.Course.destroy({
        where: {
            id: req.params.courseId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
exports.default = route;
