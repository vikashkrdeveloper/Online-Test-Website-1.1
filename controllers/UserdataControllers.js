const UserdataControllers = (req, res) => {
    res.status(200).send(req.rootUser); 
    return;
}
module.exports=UserdataControllers;