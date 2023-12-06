const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')



//CRUD
router.post('/CreateTask',TaskController.CreateTask);



module.exports=router;