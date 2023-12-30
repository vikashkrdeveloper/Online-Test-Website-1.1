const database = require("../model/RegistrationDataSchema");
const comparepasswordfunction = require("../helper/comparepassword");
const LoginControllers = async (req, res) => {
  try {
    const { userid, password } = req.body;
    if (userid && password) {
      const finduserid = await database.findOne({ userid });
      if (finduserid) {
        const hashpassword = await finduserid.password;
        const comparepassword = await comparepasswordfunction(
          password,
          hashpassword
        );
        if (comparepassword) {
          const token = await finduserid.genratetokens();
          res.cookie("jwttokens", token);
          res.status(200).send("Login Sucessfully");
        } else {
          res.status(402).send("Invalid login details");
        }
      } else {
        res.status(402).send("Invalid login details");
      }
    } else {
      res.status(500).send("All field require");
    }
  } catch (error) {
    res.status(403).send("Some technical issue");
  }
};
module.exports = LoginControllers;
