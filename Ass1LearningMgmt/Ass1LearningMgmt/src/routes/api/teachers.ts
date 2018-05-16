import express, {Router} from 'express'
const route: Router = Router()

import {Teacher} from '../../db'
import {Subject} from '../../db'
import {Batch} from '../../db'
/**
 * GET requests
 */

 route.get('/', (req, res) => {
    Teacher.findAll({})
        .then((teachers) => {
            res.json(teachers)
        })
})

route.get('/:teacherId', (req, res) => {
    Teacher.findById(parseInt(req.params.teacherId))
        .then((teacher) => {
            res.json(teacher)
        })
})
//sajdldjldjsladjl
route.get('/:teacherId/batches', (req, res) => {`
`
 Teacher.findById(parseInt(req.params.teacherId)).then((teacher:any)=>{

    Subject.findAll({
        where:{
            subjectId:teacher.subjectId
        }
    }).then((subjects:any)=>{
        Batch.findAll({
            where:{
       courseId:  subjects.courseId       
            }
        })
    }).then((batches)=>{
        res.send(batches)
    })
})
})

/**
 * POST requests
 */
// Add new Teacher to the database
route.post('/', (req, res) => {
    Teacher.create({
        name: req.body.name,
        SubjectId: req.body.SubjectId
    })
    .then((teachers)=>{
        res.send(teachers)
    })
   

})

/**
 * PUT requests
 */
// Update Teacher with given subject Id
route.put('/:teacherId', (req, res) => {
    Teacher.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.teacherId
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
// Delete Teacher with given subject Id
route.delete('/:teacherId', (req, res) => {
    Teacher.destroy({
        where: {
            id: req.params.teacherId
        }
    })
    .then(() => {
        res.json({
            success: true
        })
    })
})

export default route