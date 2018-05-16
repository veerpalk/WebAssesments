//VEERPALKAUR 3147229
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const db=new Sequelize('LearningManagementdb','usr','usrpass',{
    dialect:'sqlite',//kind of db except this all things are optional
   storage:'./learningManagement.db'
})
export const Course=db.define('Courses',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
})

export const Batch=db.define('Batches',{

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
})
export const Teacher=db.define('Teachers',{

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
})
export const Student=db.define('Students',{

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
})
export const Lecture=db.define('Lectures',{

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
})
export const Subject=db.define('Subjects',{

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
})

/** 
 * Relationships 
 */

// One to many Courses:Batches
Batch.belongsTo(Course)

// One to many Courses:Subjects
Subject.belongsTo(Course)

// One to many Subject:Teachers
Teacher.belongsTo(Subject)

//one to many Batch:Lectures
Lecture.belongsTo(Batch)

//one to one
Lecture.belongsTo(Subject)
Lecture.belongsTo(Teacher)

//one to many Batch:Students
Student.belongsToMany(Batch, {through:'StudentBatch'})
Batch.belongsToMany(Student,{through:'StudentBatch'})

// Course.create({name:'Science'})
//  console.log("seeVendors")
//   Course.findAll().then((courses)=>console.log(courses))

 
db.sync()
    .then(() => {
        
        console.log('database has been synced')
    })
    .catch((err) => {
        console.log("error syncing database " + err)
    })

//Course.drop()
//Batch.drop()
//Subject.drop()
//Teacher.drop()

// module.exports = {
//     Course,
//     Batch,
//     Subject,
//     Teacher,
//     Lecture,
//     Student
// }
