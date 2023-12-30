const bcrypt = require('bcrypt');
const comparepasswordFunction = async (password,hashpassword) => {
    try { 
        const comparepassword = await bcrypt.compare(password,hashpassword);
        return comparepassword;

    } catch (error) {
        console.log('Some technical issue');
    }
}

module.exports=comparepasswordFunction;