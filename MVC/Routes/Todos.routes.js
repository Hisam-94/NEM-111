const {Router} = require("express");
const mongodb = require("mongodb")
const { TodosModel } = require("../Models/Todos.Model");

const TodosRoutes = Router();

TodosRoutes.get("/",async (req,res)=>{
    try{
        result = await TodosModel.find()
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})

TodosRoutes.post("/create",async (req,res)=>{
    try{
        const {task,isComplete,quantity,priority} = req.body
        const data = {
            task,
            quantity,
            isComplete,
            priority
        }
        const new_data = new TodosModel(data)
        await new_data.save()
        res.send("data added successfully")
    }
    catch(err){
        console.log(err)
    }
})

TodosRoutes.delete("/:id",async (req,res)=>{
    try{
        // const {id} = req.params
        // const newID = `_id:ObjectID(${id})`
        // const result = await TodosModel.deleteOne({newID})
        const result = await TodosModel.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        res.send("Item deleted successfully")
    }
    catch(err){
        console.log(err)
    }
})

TodosRoutes.put("/:id", async (req,res)=>{
    try{
        const payload = req.body   
        const result = await TodosModel.updateOne({_id: new mongodb.ObjectId(req.params.id)},{$set:payload})
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = {
    TodosRoutes
}