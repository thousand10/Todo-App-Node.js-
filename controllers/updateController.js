const Todo = require("../models/Todo")

module.exports = async (req, res) => {
    const id = req.params.id
    await Todo.findOneAndUpdate(id, {
        title: req.body.title,
        description: req.body.description
    }, (error, done) => {
        console.log(done);
        res.redirect("/")
    })
    res.render("update")
}