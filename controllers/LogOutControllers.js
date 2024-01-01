const LogOuControllers = (req, res) => {  
    res.clearCookie('jwttokens',{path:'/'});
    res.status(200).send();
    return;
}


module.exports = LogOuControllers;