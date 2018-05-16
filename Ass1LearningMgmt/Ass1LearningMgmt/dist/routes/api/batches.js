"use strict";
//VEERPALKAUR 3147229
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const db_1 = require("../../db");
/**
 * GET requests
 */
// Fetch all Batches from database
route.get('/', (req, res) => {
    db_1.Batch.findAll()
        .then((batches) => {
        res.json(batches);
    });
});
// Fetch Batch with batch Id
route.get('/:batchId', (req, res) => {
    db_1.Batch.findById(parseInt(req.params.batchId))
        .then((batch) => {
        res.json(batch);
    });
});
/**
 * POST requests
 */
// Add new batch to the database
route.post('/', (req, res) => {
    console.log(req.body.name);
    db_1.Batch.create({
        name: req.body.name,
        CourseId: req.body.CourseId
    })
        .then((batches) => {
        res.send(batches);
    });
});
/**
 * PUT requests
 */
// Update batch with given batch Id
route.put('/:batchId', (req, res) => {
    db_1.Batch.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.batchId
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
// Delete batch with given batch Id
route.delete('/:batchId', (req, res) => {
    db_1.Batch.destroy({
        where: {
            id: req.params.batchId
        }
    })
        .then(() => {
        res.json({
            success: true
        });
    });
});
exports.default = route;
