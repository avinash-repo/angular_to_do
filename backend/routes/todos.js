const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController"); 
//http://localhost:5000/api/v1/todos/todo_create 
router.post("/todo_create", todoController.todo_add);
router.get("/getall", todoController.gets_todo);
router.post("/SoftDelete", todoController.soft_delete_todo);
//router.post("/FavTodo", todoController.fav_todo); 
router.get("/getFav", todoController.gets_fav); 
router.post("/UpdateFavorite", todoController.fav_todo); 
module.exports = router;