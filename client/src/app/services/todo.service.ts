import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';  
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = environment.apiUrl;
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  loading = false;
  //todoFav = [];
  // todoList: Todo[] = [
  //   {
  //     id: 1,
  //     title: 'Todo a One',
  //     isCompleted: false,
  //     isFavorite: false,
  //     date: new Date('4-15-2020')
  //   } 
  // ];
  todoList: Todo[] = [];
  todoFav: Todo[] = [];
  constructor(private deletePopup: ToastrService, private http: HttpClient, private _auth: AuthService,private _api: ApiService,) { }

  deleteTodo(item): Observable<any> {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    return this._api.postTypeRequest('todos/SoftDelete', {
      id: item.todo_id,
      isDeleted:item.isDeleted,
    });  
  }

  addTodo(req:any): Observable<any> {   
    return this._api.postTypeRequest('todos/todo_create', {
      title: req.title,
      user_id:req.user_id,
    });    
  } 

  updateFav(item): Observable<any> {
   // this.fav = JSON.parse(localStorage.getItem('favorite'));   
   if(item.isFavorite==1){
      item.isFavorite=0;
   }else{
    item.isFavorite=1;
   }
    return this._api.postTypeRequest('todos/UpdateFavorite', {
      id: item.todo_id,
      isFavorite:item.isFavorite,
    });
  }

  getAll(req){    
    this.todoList= [];   
    console.log("TSLine57",req.data);
    req.data.forEach((data) => {
      this.todoList.push({ ...data });
    })
  }

  getFav(req){    
    this.todoFav= [];   
    console.log("FavLine65",req.data);
    req.data.forEach((data) => {
      this.todoFav.push({ ...data });
    })
  }

  getAllTodos(limitOfResults = 9, page): Observable<Todo> {
    return this.http.get<Todo>(this.url + 'todos/getall/', {
      params: {
        limita: limitOfResults.toString(),       
        user_id:page,
      },
    });
  }

}
