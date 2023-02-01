// mongodb+srv://Hisam94:<password>@cluster0.ktnramd.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://Hisam94:Hisam94@cluster0.ktnramd.mongodb.net/?retryWrites=true&w=majority")

const topicScema = new mongoose.Schema({
    topic_name : String,
})

const TopicModel = mongoose.model("topic", topicScema)

module.exports = {
    connection,
    TopicModel
}