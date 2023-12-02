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


