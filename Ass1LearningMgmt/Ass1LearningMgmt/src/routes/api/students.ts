
import express, {Router} from 'express'
const route: Router = Router()
import {Student} from '../../db'

/**
 * GET requests
 */
// Fetch all Students from database
route.get('/', (req, res) => {
    Student.findAll({})
        .then((students) => {
            res.json(students)
        })
})

// Fetch Student with student Id
route.get('/:studentId', (req, res) => {
    Student.findById(parseInt(req.params.studentId))
        .then((student) => {
            res.json(student)
        })
})
//Watch It
route.get('/:studentId/batches', (req, res) => {
    Student.findById(parseInt(req.params.studentId))
    .then((student:any) => {
        student.getBatches().then((batches:any)=>{
            res.json(batches)
        })
    })
})
/**
 * POST requests
 */
// Add new student to the database
route.post('/', (req, res) => {
    Student.create({
        name: req.body.name,
       
    })
    .then((students)=>{
        res.send(students)
    })
})

/**
 * PUT requests
 */
// Update student with given student Id
route.put('/:studentId', (req, res) => {
    Student.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.studentId
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
// Delete student with given student Id
route.delete('/:studentId', (req, res) => {
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
    .then(() => {
        res.json({
            success: true
        })
    }) 
})
export default route