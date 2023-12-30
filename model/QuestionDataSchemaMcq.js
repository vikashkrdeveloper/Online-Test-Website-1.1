const database = require('../db/connect');
const QuestionDataSchemaMcq = new database.Schema({
    questionname: {
        type: String,
        lowarecase: true,
        trim: true
    },
    questionnumber: {
        type: Number,
        trim: true
    },
    option1: {
        type: String,
        lowarecase: true,
        trim: true
    },
    option2: {
        type: String,
        lowarecase: true,
        trim: true
    },
    option3: {
        type: String,
        lowarecase: true,
        trim: true
    },
    option4: {
        type: String,
        lowarecase: true,
        trim: true
    },
    mcqanswer: {
        type: String,
        lowarecase: true,
        trim: true
    }
}, { timestamps: true })

const QuestionDataModelMcq = new database.model('Question-Mcq', QuestionDataSchemaMcq);

module.exports = QuestionDataModelMcq;