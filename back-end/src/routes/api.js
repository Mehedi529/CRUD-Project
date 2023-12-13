const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')



//CRUD
router.post('/CreateTask',TaskController.CreateTask);
router.get("/ListTask",TaskController.ListTask);
router.get("/ListTaskById/:id",TaskController.ListTaskById);
router.post("/UpdateTask/:id",TaskController.UpdateTask);
router.get("/DeleteTask/:id",TaskController.DeleteTask);



module.exports=router;