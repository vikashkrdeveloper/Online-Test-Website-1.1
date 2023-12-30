const bcrypt = require('bcrypt');
const hashFunction = async (password) => {
    try {
        const salt = 12;
        const hashpassword = await bcrypt.hash(password, salt);
        return hashpassword;

    } catch (error) {
        console.log('Some technical issue');
    }
}

module.exports=hashFunction;