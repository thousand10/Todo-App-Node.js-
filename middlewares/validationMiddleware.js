module.exports = (req, res, next) => {
    if (req.params.title == null && req.params.description){
        return res.render("create")
    }
}