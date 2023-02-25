import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../../models/Todo';

@Component({
  // selector: 'ATO4',
  selector: 'ion-item',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  // @Input() todoInput;
  @Input() todoInput: Todo;

  completed: boolean = false;
  todo: Todo;

  constructor(public todoService: TodoService, private toasterService: ToastrService) { }

  ngOnInit(): void {
  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
  }

  onCliCk(e) {
    console.log("Clicked");
    console.log(e);
  }

  toggleClass() {
    if (this.completed) {
      // return 'list-item-success';
      return { 'list-group-item-success': this.completed, 'border-primary': this.completed };
    }
  }

  deleteTodo(item): void { 
    this.todo = item;
    let myitem={ item:item,todo_id:item.id,isDeleted:1 }
    this.todoService.deleteTodo(myitem).subscribe(
      (res) => {
        console.log(res);        
      },
      (err) => {       
        console.log(err);
      }
    );    
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  }

  isFavorite(item): void { 
    this.todo = item;
    //let isf=item.isFavorite;     
    let myitem={ item:item,todo_id:item.id,isFavorite:item.isFavorite }
    this.todoService.updateFav(myitem).subscribe(
      (res) => {
        console.log(res);        
      },
      (err) => {       
        console.log(err);
      }
    );    
    this.toasterService.success('Todo Added to Favorite');
  }
 
}
