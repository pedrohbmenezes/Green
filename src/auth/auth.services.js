const bcrypt = require('bcrypt');

const generateHash = async (password)=> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash
}


 module.exports = generateHash