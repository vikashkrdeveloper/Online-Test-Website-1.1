const path=require('path')
const ErrorControllers = (req, res) => {
    res.sendFile(path.join(__dirname,'./Error.html'))
    return;
}

module.exports = ErrorControllers;