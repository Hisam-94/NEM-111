const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mypersonalDB")

const movieSchema = mongoose.Schema({
    title:String,
    language:String,
    release_date:String,
    rating:Number,    
})

const MoviesModel = mongoose.model("moviesData",movieSchema)

module.exports = {
    connection,
    MoviesModel
}