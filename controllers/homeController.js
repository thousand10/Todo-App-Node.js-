const Todo = require("../models/Todo")

module.exports = async (req, res) => {
    const todos = await Todo.find({})
    res.render("index", {
        todos
    })
}