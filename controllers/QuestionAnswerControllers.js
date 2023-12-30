const database = require("../model/QuestionAnswerDataSchema");
const QuestionAnswerControllers = async (req, res) => {
    try {
        const { username, userid, questionid, questionname, answer, submittime } = req.body;
        if (username && userid && questionname && questionid && answer && submittime) {
            const check_question_submit_or_not = await database.findOne({ questionid, username, userid });
            if (check_question_submit_or_not) {
                res.status(402).send("Already submit");
            } else {
                const insertdata = await new database({ username, userid, questionid, questionname, answer, submittime });
                await insertdata.save();
                res.status(200).send("Question Done");

            }
        } else {
            res.status(500).send("Internal server error");
        }
    } catch (error) {
        console.log("Some technical issue" + error);
        res.status(403).send("Some technical issue");
    }
};
module.exports = QuestionAnswerControllers;
