export interface Todos {
  count: number;
  todos: Todo[];
}

export interface Todo {
  id: Number;
  user_id: Number;
  title: String;
  date: String;  
}
