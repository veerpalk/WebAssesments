import express, {Router} from 'express'
const route: Router = Router()
import courses from './courses';
import subjects from './subjects';
import students from './students';
import  teachers from './teachers';
import batches from './batches';
import lectures from './lectures';

//routes are Registered here
route.use('/courses',courses)
 route.use('/subjects', subjects)
 route.use('/students',students)
 route.use('/teachers', teachers)
 route.use('/batches', batches)
 route.use('/lectures', lectures)

 export default route