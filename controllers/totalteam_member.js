const database = require('../model/RegistrationDataSchema');
const totalteam_member = async (req, res) => {
    try {
        const finddata = await database.find();
        const datas = []
        finddata.map((element) => {
            datas.push({ _id: element._id, name: element.name, userid: element.userid, email: element.emailid, registration: element.registrationno })

        })
        res.status(200).send(datas); 
        return;

    } catch (error) {
        console.log('Some technical issue');
        res.status(403).send("Some technical issue" + error) 
        return;
    }
}
module.exports = totalteam_member