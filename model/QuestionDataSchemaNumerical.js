const database = require('../db/connect');
const QusetionDataSchemaNumerical = new database.Schema({
    questionname: {
        type: String,
        lowercase: true,
        trim: true
    },
    questionnumber: {
        type: Number,
        trim: true
    }
}, { timestamps: true })

const QusetionDataModelNumerical = new database.model('Question-Numerical', QusetionDataSchemaNumerical);
module.exports = QusetionDataModelNumerical;