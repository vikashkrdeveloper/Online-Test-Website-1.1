const database = require("../model/RegistrationDataSchema");
const hashpasswordfunction = require('../helper/hash')
const forgetpasswordcontrollers = async (req, res) => {
  try {
    const { userid, password } = req.body;
    if (userid && password) {
      const finddata = await database.findOne({ userid });
      if (finddata) {
        const hashpassword = await hashpasswordfunction(password);
        const updatadata = await database.updateOne({ userid }, { password: hashpassword });
        res.status(200).send("Password Updated");
      } else {
        res.status(408).send("Invalid userid");
      }
    } else {
      res.status(500).send("All field require");
    }
  } catch (error) {
    console.log("Some technical issue");
    res.status(403).send("Some technical issue");
  }
};
module.exports = forgetpasswordcontrollers;
