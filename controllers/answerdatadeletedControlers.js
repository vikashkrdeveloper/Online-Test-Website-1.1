const database = require('../model/QuestionAnswerDataSchema');
const answerdatadeletedControlers = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await database.deleteOne({ _id: id });
            res.status(200).send("Deleted Sucessfully");
            return;

        } else {
            res.status(403).send('Some technical issue')
            return;
        }

    } catch (error) {

        console.log('Some technical issue' + error);
        res.status(403).send('Some technical issue')
        return;
    }
}
module.exports = answerdatadeletedControlers;