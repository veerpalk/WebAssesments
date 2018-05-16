//VEERPALKAUR 3147229
import express, {Router} from 'express'
const route: Router = Router()

import  {Lecture } from '../../db'

/**
 * GET requests
 */
route.get('/', (req, res) => {
    Lecture.findAll({})
        .then((lectures) => {
            res.json(lectures)
        })
})

route.get('/:lectureId', (req, res) => {
    Lecture.findById(parseInt(req.params.lectureId))
        .then((lecture) => {
            res.json(lecture)
        })
})

/**
 * POST requests
 */
// Add new Lecture to the database
route.post('/', (req, res) => {
    Lecture.create({
        name: req.body.name,
        BatchId: req.body.BatchId,
        TeacherId:req.body.TeacherId,
        SubjectId:req.body.SubjectId
    })
    .then((lectures)=>{
        res.send(lectures)
    })
})


/**
 * PUT requests
 */
// Update Lecture with given lecture Id
route.put('/:lectureId', (req, res) => {
    Lecture.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.lectureId
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
// Delete Lecture with given lecture Id
route.delete('/:lectureId', (req, res) => {
    Lecture.destroy({
        where: {
            id: req.params.lectureId
        }
    })
    .then(() => {
        res.json({
            success: true
        })
    })
})

export default route