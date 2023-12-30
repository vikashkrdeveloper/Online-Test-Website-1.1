 const database = require('../model/RegistrationDataSchema');
const Totalparticipantdatadeletecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await database.deleteOne({ _id: id });
            res.status(200).send("Deleted Sucessfully");

        } else {
            res.status(403).send('Some technical issue')
        }

    } catch (error) {

        console.log('Some technical issue' + error);
        res.status(403).send('Some technical issue')
    }
}
module.exports = Totalparticipantdatadeletecontrollers;