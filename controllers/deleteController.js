const Todo = require("../models/Todo")

module.exports = async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.redirect("/")
}