const TaskModel = require('../models/TaskModel');


//Create
exports.CreateTask = async (req,res)=>{
    let reqBody = req.body;
    try{
        let result = await TaskModel.create(reqBody);
        res.status(200).json({status:"successfully created the task", message:result})
    }
    catch(error){
        res.status(200).json({status:"failed to created the task", message:error})
    }
}


//Read
exports.ListTask = async(req, res)=>{
    try{
        let result = await TaskModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch(error){
        res.status(200).json({status:"fail",data:error})
    }
}
//Read By Id
exports.ListTaskById = async(req,res)=>{
    try{
        let id = req.params.id;
        let query = {_id:id};
        let result=await TaskModel.find(query);
        res.status(200).json({status:"success",data:result})
    }
    catch(error){
        res.status(200).json({status:"fail",data:error})
    }
}



//Update
exports.UpdateTask = async(req,res)=>{
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let query = {_id:id};
        let result=await TaskModel.updateOne(query,reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch(error){
        res.status(200).json({status:"fail",data:error})
    }
}



//Delete
exports.DeleteTask=async(req, res)=> {
    let id=req.params.id;
    let query={_id:id};
    try{
        let result=await TaskModel.deleteOne(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (error) {
        res.status(200).json({status:"fail",data:error})
    }
}


