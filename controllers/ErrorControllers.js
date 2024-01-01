const ErrorControllers = (req, res) => {
    res.status(404).send('Page Not Found');
    return;
}

module.exports = ErrorControllers;