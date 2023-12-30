const database = require('../model/RegistrationDataSchema');
const hashpasswordfunction = require('../helper/hash');
const RegistrationControllers = async (req, res) => {
    try {
        const { userid, password, conformpassword, name, registrationno, emailid } = req.body;

        if (userid && password && conformpassword && name && registrationno && emailid) {
            const useridfind = await database.findOne({ userid });
            const emailidfind = await database.findOne({ emailid });
            const registrationnofindfind = await database.findOne({ registrationno });
            if (useridfind) {
                res.status(400).send('Userid Already exist ');
            } else {
                if (emailidfind) {
                    res.status(403).send('Email already exist');

                } else {
                    if (registrationnofindfind) {
                        res.status(402).send('Registration Number already exist');

                    } else {
                        if (password === conformpassword) {
                            const hashpassword = await hashpasswordfunction(password);
                            const datainsert = new database({ userid, password: hashpassword, name, registrationno, emailid });
                            await datainsert.save();

                            res.status(200).send('Registration sucessfully');

                        } else {
                            res.status(401).send('Password and conform password is wrong');
                        }
                    }
                }

            }

        }
        else {
            res.status(500).send('All field require');
        }
    } catch (error) {
        console.log('Some technical issue' + error);
        res.status(403).send("Some technical issue");
    }
}
module.exports = RegistrationControllers;