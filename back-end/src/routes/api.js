const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')



//CRUD
//c=create
router.post('/CreateTask',TaskController.CreateTask);
//r=read



module.exports=router;