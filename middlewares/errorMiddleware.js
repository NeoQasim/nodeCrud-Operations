const errorHandler = (err, req, res, next) => {
    res.json({
        errorfrom_middleware: err.message
    })

}   

module.exports = { errorHandler }