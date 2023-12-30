const database = require('../model/QuestionAnswerDataSchema');
const QuestionAnswerApiControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        const data=[];
        finddata.forEach((element)=>{
            data.push({_id:element._id,questionid:element.questionid,username:element.username,userid:element.userid,questionname:element.questionname,submittime:element.submittime,answer:element.answer})
        })
        res.status(200).send(data);


    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(400).send('Some technical issue please reload the page')
    }
}

module.exports = QuestionAnswerApiControllers;