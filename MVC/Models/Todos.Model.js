const mongoose = require("mongoose")

const todoScema = mongoose.Schema({
    task:String,
    quantity:Number,
    isComplete:Boolean,
    priority:String,
})

const TodosModel = mongoose.model("todo",todoScema)

module.exports = {
    TodosModel
}