const database = require('../model/QuestionDataSchemaNumerical');

const NumericalQuestionApiControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        const data = [];
        finddata.forEach((element, index) => {
            data.push({ _id: element._id, questionnumber: element.questionnumber, questionname: element.questionname });

        })
        if (req.query.search) {
            const productdata = data.filter(product => product.questionname.includes(req.query.search))
            res.send(productdata)
            return;
        } else {

            res.status(200).send(data);
            return;
        }

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send('Some technical issue');
        return;
    }
}
module.exports = NumericalQuestionApiControllers;