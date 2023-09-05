import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';
import { task } from '../models/task';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.css']
})
export class TodotaskComponent implements OnInit {
  taskObj : task =new task();
  taskArr:any=[];

  addTaskValue : string= '';
  editTaskValue: string = ''
  constructor(private todoService: TodoService) { }


  ngOnInit() {
    this.taskObj=new task();
    //this.createToDo();
   // this.updateTodo();
   //this.deleteToDo();
    this.getAllTodos();
  }

  createToDo() {
    // let todo = {
    //   id: new Date().getTime(),
    //   title: `Angular batch 7`
    // }
    this.taskObj.task_name=this.addTaskValue;
    this.todoService.create(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue= '';
      console.log('todo create', res);
    })
  }

  getAllTodos() {
    this.todoService.list().subscribe(res => {
      this.taskArr= res;
    })
  }

  updateTodo(etask : task) {
    // let todo = {
    //   title: `Updated - Angular batch 7`
    // }
    this.taskObj.task_name=this.editTaskValue;
    this.todoService.update(this.taskObj).subscribe(res => {
      this.ngOnInit()
      console.log('todo updated');
    })
  }

  deleteToDo(etask : task) {
    this.todoService.deleteTodo(etask).subscribe(res => {
     this.ngOnInit();
      console.log('todo deleted', res);
    })
  }

  call(etask:task){
    this.taskObj=etask;
    this.editTaskValue=etask.task_name
  }

}
