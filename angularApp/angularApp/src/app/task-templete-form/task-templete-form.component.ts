import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-templete-form',
  templateUrl: './task-templete-form.component.html',
  styleUrls: ['./task-templete-form.component.css']
})
export class TaskTempleteFormComponent implements OnInit {

  defaultValue='male';
  constructor() { }

  ngOnInit() {
  }

}
