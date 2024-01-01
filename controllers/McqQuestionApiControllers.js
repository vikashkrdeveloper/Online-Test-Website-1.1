const database = require('../model/QuestionDataSchemaMcq');
const McqQuestionApiControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        const data=[];
        finddata.forEach((element)=>{
            data.push({_id:element._id,questionnumber:element.questionnumber,questionname:element.questionname,option1:element.option1,option2:element.option2,option3:element.option3,option4:element.option4,mcqanswer:element.mcqanswer})
        })
        res.status(200).send(data);
        return;

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send("Some technical issue");
        return;
    }
}
module.exports = McqQuestionApiControllers;