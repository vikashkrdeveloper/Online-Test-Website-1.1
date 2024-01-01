const database = require('../model/QuestionAnswerDataSchema');
const database2 = require('../model/QuestionDataSchemaMcq');
const database3 = require('../model/QuestionDataSchemaNumerical');
const database4 = require('../model/RegistrationDataSchema'); 
const QuestiontatalcountAnswerApiControllers = async (req, res) => {
    try {
        const Answer=await database.countDocuments();
        const mcqquestion=await database2.countDocuments();
        const numbericalquestion=await database3.countDocuments();
        const totalparticipent=await database4.countDocuments();
        const datas={Answer,mcqquestion,numbericalquestion,totalparticipent};
        res.status(200).send(datas); 
        return;

    } catch (error) {
        console.log('Some technical issue'); 
        return;
    }
}
module.exports=QuestiontatalcountAnswerApiControllers;