const database = require('../model/QuestionDataSchemaNumerical');

const QuestionnumbericalControllers = async (req, res) => {
    try {
        const { questionname, questionnumber } = req.body;
        
         

        if (questionname) {
            const findnum = await database.findOne({ questionnumber });
            if (findnum) {
                res.status(401).send('Question number already exist');

            } else {
                const insertdata = await new database({ questionname, questionnumber });
                await insertdata.save();
                res.status(200).send('Done Question Added');
            }
        } else {
            res.status(500).send("All field require");
        }

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send("Some technical issue");
    }
}

module.exports = QuestionnumbericalControllers;