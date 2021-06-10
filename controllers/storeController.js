const Todo = require("../models/Todo")

module.exports = async(req, res) => {
    const data = req.body
    await Todo.create(data, (error, done) => {
        if (done){
            return res.redirect("/")
        } else {
            res.redirect("/create")
        }
    })
}