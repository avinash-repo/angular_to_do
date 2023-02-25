import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'; 
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service'; 
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: [],
})

export class TodoFormComponent implements OnInit {
  todo = '';
  user: any;
  orders: any[] = [];
  error = '';
  userId = null;
  alertMessage = '';
  alertType = '';
  alertVisible = false;
  loading = false;
  
  constructor(
    public todoService: TodoService,
    private _api: ApiService,
    private _auth: AuthService,
    private _token: TokenStorageService,
  ) {
    this.user = this._auth.getUser();
  }

  ngOnInit(): void {
    const { user_id, full_name, email } = this._token.getUser();
    this.userId = user_id;
    this.user[0].value = full_name;
    this.user[1].value = email;
    console.log(this.user);
  }
  
  onSubmit(): void { 
    this.todoService
          .addTodo({
            title: this.todo,            
            user_id: this.userId,
          }).subscribe(
            (res) => {
              console.log(res);             
            },
            (err) => {            
              console.log(err);
            }
          );
          this.todo = '';
  }
}