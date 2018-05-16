"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//VEERPALKAUR 3147229
const sequelize_1 = __importDefault(require("sequelize"));
const Op = sequelize_1.default.Op;
const db = new sequelize_1.default('LearningManagementdb', 'usr', 'usrpass', {
    dialect: 'sqlite',
    storage: './learningManagement.db'
});
exports.Course = db.define('Courses', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
});
exports.Batch = db.define('Batches', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Teacher = db.define('Teachers', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Student = db.define('Students', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Lecture = db.define('Lectures', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
exports.Subject = db.define('Subjects', {
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
});
/**
 * Relationships
 */
// One to many Courses:Batches
exports.Batch.belongsTo(exports.Course);
// One to many Courses:Subjects
exports.Subject.belongsTo(exports.Course);
// One to many Subject:Teachers
exports.Teacher.belongsTo(exports.Subject);
//one to many Batch:Lectures
exports.Lecture.belongsTo(exports.Batch);
//one to one
exports.Lecture.belongsTo(exports.Subject);
exports.Lecture.belongsTo(exports.Teacher);
//one to many Batch:Students
exports.Student.belongsToMany(exports.Batch, { through: 'StudentBatch' });
exports.Batch.belongsToMany(exports.Student, { through: 'StudentBatch' });
// Course.create({name:'Science'})
//  console.log("seeVendors")
//   Course.findAll().then((courses)=>console.log(courses))
db.sync()
    .then(() => {
    console.log('database has been synced');
})
    .catch((err) => {
    console.log("error syncing database " + err);
});
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
