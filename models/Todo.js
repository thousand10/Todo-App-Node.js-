const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: new Date()
    }
})

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo