import express, {Router} from 'express'
const route: Router = Router()
import {Subject} from '../../db'
import {Teacher} from '../../db'
import { AnyKindOfDictionary } from 'lodash';


/**
 * GET requests
 */


route.get('/', (req, res) => {
    Subject.findAll({})
        .then((subjects) => {
            res.send(subjects)
        })
})

route.get('/:subjectId', (req, res) => {
    Subject.findById(parseInt(req.params.subjectId))
        .then((subject) => {
            res.json(subject)
        })
})

route.get('/:subjectId/teachers', (req, res) => {
    Subject.findById(parseInt(req.params.subjectId))
    .then((subject:any) => {
        Teacher.findAll({
            where:{
                subjectId:subject.id
            }
        }).then((teachers)=>{
            res.json(teachers)})
})
   
})

/**
 * POST requests
 */
// Add new Subject to the database
route.post('/', (req, res) => {
    Subject.create({
        name: req.body.name,
        CourseId: req.body.CourseId
    })
    .then((subjects)=>{
        res.send(subjects)
    })
})

/**
 * PUT requests
 */
// Update subject with given subject Id
route.put('/:subjectId', (req, res) => {
    Subject.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.subjectId
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
// Delete subject with given subject Id
route.delete('/:subjectId',(req,res) => {
    Subject.destroy({
        where: {
            id: req.params.subjectId
        }
    })
    .then(() => {
        res.json({
            success: true
        })
    })
})

export default route