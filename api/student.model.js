const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema(
    {
        student_name: {
            type: String,
        },
        school_name: {
            type: String,
        },
        class_name: {
            type: String,
        },
    },
    {
        collection: 'student',
    }
);

module.exports = mongoose.model('Student', Student);