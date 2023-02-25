import { Component, OnInit } from '@angular/core'; 
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router'; 
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'add-fav',
  templateUrl: './todo-fav.component.html',
  styles: []
})
export class TodoFavComponent implements OnInit {
  user: any;   
  error = '';
  constructor(
    private _api: ApiService,
    private _auth: AuthService,    
    public todoService: TodoService, 
    public route: ActivatedRoute
  ) {
    this.user = this._auth.getUser();
  } 
  // viewList: boolean = true; 
  ngOnInit(): void {  
    let Mroute = this.route.snapshot; 
    // if(Mroute.routeConfig.path=="favorite"){
    //  console.log('ssff',Mroute.routeConfig.path);
    // }    
    this._api.getTypeRequest(`todos/getFav/?user_id=${this.user.user_id}`).subscribe(
      (res: any) => {       
          this.todoService.getFav(res);
      },
      (err) => {
        this.error = err.error.message;
      }
    );    
  }
}
