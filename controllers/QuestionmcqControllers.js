const database = require('../model/QuestionDataSchemaMcq');
const QuestionmcqControllers = async (req, res) => {
    try {
        const { questionname, option1, option2, option3, option4, mcqanswer, questionnumber } = req.body;
        if (questionname && option1 && option2 && option3 && option4 && mcqanswer && questionnumber) {
            const finddata = await database.findOne({ questionnumber });
            if (finddata) {
                res.status(401).send("Questionnumber Already exist ");

            } else {
                if (option1 === option2 || option1 == option3 || option1 === option4) {
                    res.status(400).send("Two Option Are Same Please change data");
                } else {
                    if (option2 === option1 || option2 == option3 || option2 === option4) {
                        res.status(400).send("Two Option Are Same Please change data");

                    } else {
                        if (option3 === option2 || option3 == option1 || option3 === option4) {
                            res.status(400).send("Two Option Are Same Please change data");
                        } else {
                            if (option4 === option2 || option4 == option3 || option4 === option1) {
                                res.status(400).send("Two Option Are Same Please change data");
                            } else {
                                const insertdata = await new database({ questionname, questionnumber, option1, option2, option3, option4, mcqanswer });
                                await insertdata.save();
                                res.status(200).send('Done Added');
                            }
                        }
                    }
                }
            }
        } else {
            res.status(500).send('All field require');
        }

    } catch (error) {
        console.log('Some technical issue');
    }
}
module.exports = QuestionmcqControllers;