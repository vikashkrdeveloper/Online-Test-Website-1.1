const database = require('../model/QuestionAnswerDataSchema');
const QuestiontatalAttamptAnswerApiControllers = async (req, res) => {
    try {
        let userid = req.params.userid;
        let data = [];
        const datas = await database.find({ userid: '1234567891' });
        if (datas) {
            datas.forEach((element, index) => {
                data.push({ _id: element._id, username: element.username, userid: element.userid, questionnumber: element.questionnumber, questionname: element.questionname, answer: element.answer, submittime: element.submittime });
            })
            res.status(200).send(data)
            return;
        }

    } catch (error) {
        console.log("Error");
    }
}
module.exports = QuestiontatalAttamptAnswerApiControllers;