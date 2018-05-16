//VEERPALKAUR 3147229

import express, {Router} from 'express'
const route: Router = Router()
import {Batch} from '../../db'


/**
 * GET requests
 */
// Fetch all Batches from database
route.get('/', (req, res) => {
    Batch.findAll()
        .then((batches) => {
            res.json(batches)
        })
})

// Fetch Batch with batch Id
route.get('/:batchId', (req, res) => {
    Batch.findById(parseInt(req.params.batchId))
        .then((batch) => {
            res.json(batch)
        })
})

/**
 * POST requests
 */
// Add new batch to the database
route.post('/', (req, res) => {
    console.log(req.body.name)
    Batch.create({
        name:req.body.name,
        CourseId:req.body.CourseId
    })
    .then((batches)=>{
        res.send(batches)
    })
})

/**
 * PUT requests
 */

// Update batch with given batch Id
route.put('/:batchId', (req, res) => {
    Batch.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.batchId
            }
        })
        .then(() => {
            res.json({
                success: true
            })
        })
})

/**
 * DELETE requests
 */
// Delete batch with given batch Id
route.delete('/:batchId', (req, res) => {
    Batch.destroy({
            where: {
                id: req.params.batchId
            }
        })
        .then(() => {
            res.json({
                success: true
            })
        })
})
export default route