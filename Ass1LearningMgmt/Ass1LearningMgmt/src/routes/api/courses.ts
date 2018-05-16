//VEERPALKAUR 3147229
import express, {Router} from 'express'
const route: Router = Router()

import {Course} from '../../db'
import {Batch} from '../../db'
import {Lecture} from '../../db'
import {Student} from '../../db'

/**
 * GET requests
 */
route.get('/', (req, res) => {
    Course.findAll()
        .then((courses) => {
            res.json(courses)
        })
})

route.get('/:courseId', (req, res) => {
    Course.findById(parseInt(req.params.courseId))
        .then((course) => {
            res.json(course)
        })
})

route.get('/:courseId/batches', (req, res) => {
    Batch.findAll({
        where: {
            courseId: req.params.courseId
        }
    })
    .then((batches) => {
        if (batches) {
            res.status(200).json(batches)
        } else {
            res.status(404).json({
                error: 'No batch found'
            })
        }
    })


})

route.get('/:courseId/batches/:batchId', (req, res) => {

    Batch.find({
        where: {
            courseId: req.params.courseId,
            id: req.params.batchId
        }
    })
    .then((batch) => {
        if (batch) {
            res.status(200).json(batch)
        } else {
            res.status(404).json({
                error: 'No batch found'
            })
        }
    })
})

 
//Pleasee Check..
route.get('/:courseId/batches/:batchId/lectures', (req, res) => {
     Batch.findAll({
        where : {
           courseId:req.params.courseId,
           id:req.params.batchId
       },
}).then((batches:any)=>{
    Lecture.findAll({
        where:{
            batchId:batches.id
        }
    }).then(lectures=>{
        res.send(lectures)
    })
    
})
 
})

route.get('/:courseId/batches/:batchId/lectures/lectureId', (req, res) => {
    Batch.findAll({
         where : {
            courseId:req.params.courseId,
            id:req.params.batchId
        },
 }).then((batches:any)=>{
    Lecture.findAll({
        where:
        {
            Id:req.params.lectureId,
            batchId:batches.id
        }
    }).then(lectures=>{
        res.send(lectures)
    })
 })
 })

route.get('/:courseId/batches/:batchId/students', (req, res) => {

     Batch.findAll({
         where : {
            courseId:req.params.courseId,
            id:req.params.batchId
        },
 }).then((batches:any)=>{
    Student.findAll({
        where:
        {
            batchId:batches.id
        }
    }).then(students=>{
        res.send(students)
    })
 })

})

//hdjlfjldfjlfjlfjlfjfl
route.get('/:courseId/batches/:batchId/teachers', (req, res) => {

     Batch.findAll({
         where : {
            courseId:req.params.courseId,
            id:req.params.batchId
        },
 }).then((batches:any)=>{
    Student.findAll({
        where:
        {
            batchId:batches.id
        }
    }).then(students=>{
        res.send(students)
    })

 })

})

/**
 *  POST requests
 */
// Add new course to database
route.post('/', (req, res) => {
    Course.create({
        name:req.body.name,
    })
    .then((courses)=>{
        res.send(courses)
    })
})

/**
 * PUT requests
 */
// Update Course with given course Id
route.put('/:courseId', (req, res) => {
    Course.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.courseId
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
// Delete Course with given course Id
route.delete('/:courseId', (req, res) => {
    Course.destroy({
            where: {
                id: req.params.courseId
            }
        })
        .then(() => {
            res.json({
                success: true
            })
        })
})
export default route