const database = require('../model/QuestionDataSchemaNumerical');

const NumericalQuestionApiControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        const data = [];
        finddata.forEach((element, index) => {
            data.push({ _id: element._id, questionnumber: element.questionnumber, questionname: element.questionname });

        })

        res.status(200).send(data);

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send('Some technical issue');
    }
}
module.exports = NumericalQuestionApiControllers;