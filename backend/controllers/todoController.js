const { todoAdd,GetTodos,SoftDeleteTodo,FavTodo,GetFav } = require("../services/todoService");
 
exports.todo_add = async (req, res, next) => {
  const { user_id, title } = req.body;
  todoAdd({ user_id,title })
    .then((result) => {     
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.gets_todo = async (req, res, next) => {
  const { user_id } = req.query;
  GetTodos({ user_id })
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};

exports.soft_delete_todo = async (req, res, next) => {
  SoftDeleteTodo(req.body) 
    .then((result) => { 
      const { statusCode = 200, message, data } = result;
      res.status(statusCode).send({ message, data });
    })
    .catch((err) => {  
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.fav_todo = async (req, res, next) => {   
  FavTodo(req.body)  
    .then((result) => {      
      const { statusCode = 200, message, data } = result;
      res.status(statusCode).send({ message, data });
    })
    .catch((err) => {      
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.gets_fav = async (req, res, next) => {
  const { user_id } = req.query;
  GetFav({ user_id })
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};