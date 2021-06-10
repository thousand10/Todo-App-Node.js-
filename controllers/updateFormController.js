const Todo = require("../models/Todo")

module.exports = (req, res) => {
    // const title = Todo.title;
    // const description = Todo.description;
    res.render("update", {
        Todo
    })
}