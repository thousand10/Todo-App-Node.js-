const Todo = require("../models/Todo")

module.exports = async (req, res) => {
    const id = req.params.id
    const todoDetail = await Todo.findById(id);
    res.render("detail", {
        todoDetail
    })
}