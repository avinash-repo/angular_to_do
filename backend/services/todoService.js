const db = require("../database/db");
const date = require("date-and-time");
const { SoftDeleteTodoValid,FavTodoValid} = require("../middleware/validation");
exports.todoAdd = async (params) => {
  const { user_id, title } = params;  
  const now = new Date();
  const edate = date.format(now, "YYYY-MM-DD HH:mm:ss");  
  return new Promise((resolve, reject) => { 
    db.query("INSERT INTO todo (date,user_id,title) VALUES (?,?,?)", {
      replacements: [edate, user_id, title],
      type: db.QueryTypes.INSERT,
    }).then((result) => {   
      if (result) {
        reject({
          message: "Something went wrong, please try again",
          statusCode: 400,
          data: result,
        });
      } else {
        const token = jwt.sign({ data: result }, "secret");
        resolve({
          data: result,
          message: "You have successfully registered.",
          token: token,
          statusCode: 200,
        });
      }
    });
  });
};

exports.GetTodos = async (params) => { 
  const { user_id } = params;
  if (!user_id) throw { message: "user_id was not provided", statusCode: 400 };
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM todo WHERE "isDeleted"!='1' and user_id = ?`, {
      replacements: [user_id, user_id],
      type: db.QueryTypes.SELECT,
    }).then((result) => {
      if (result.length === 0) {
        reject({ message: "No todo found for this users", statusCode: 400 });
      }
      resolve({
        statusCode: 200,
        message: `${result.length} Todos were found`,
        data: result,
      });
    });
  });
};

exports.SoftDeleteTodo = async (params) => {
  const { error } = SoftDeleteTodoValid(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };
  const { id, isDeleted } = params; 
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM todo WHERE id = ?", {
      replacements: [id],
      type: db.QueryTypes.SELECT,
    }).then((result) => {
      if (result.length === 0) {
        reject({ message: "No todo found for this delete", statusCode: 400 });
      } else {
        db.query(`UPDATE todo SET "isDeleted"=${isDeleted} WHERE "id" = ?`, {
          replacements: [id],
          type: db.QueryTypes.SELECT,
        }).then((res) => {
          resolve({
            statusCode: 200,
            message: "Todos details have been successfully updated",
            data: res,
          });
        });
      }
    });
  });
};

exports.FavTodo = async (params) => { 
  const { error } = FavTodoValid(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };
  const { id, isFavorite } = params; 
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM todo WHERE id = ?", {
      replacements: [id],
      type: db.QueryTypes.SELECT,
    }).then((result) => {
      if (result.length === 0) {
        reject({ message: "No todo found for this Favorite", statusCode: 400 });
      } else {
        db.query(`UPDATE todo SET "isFavorite"=${isFavorite} WHERE "id" = ?`, {
          replacements: [id],
          type: db.QueryTypes.SELECT,
        }).then((res) => {
          resolve({
            statusCode: 200,
            message: "Todos Fav details have been successfully updated",
            data: res,
          });
        });
      }
    });
  });
};

exports.GetFav = async (params) => { 
  const { user_id } = params;  
  if (!user_id) throw { message: "user_id  was not provided", statusCode: 400 };
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM todo WHERE "isFavorite"='1' and "user_id" = ?`, {
      replacements: [user_id, user_id],
      type: db.QueryTypes.SELECT,
    }).then((result) => {
      if (result.length === 0) {
        reject({ message: "No todo found for this fav", statusCode: 400 });
      }
      resolve({
        statusCode: 200,
        message: `${result.length} Todos fav were found`,
        data: result,
      });
    });
  });
};
