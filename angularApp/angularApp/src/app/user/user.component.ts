import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nameSerach : string='';
  newArray :any=[];

  constructor(private objUser: UserService) { }

  ngOnInit() {
    const obj = this.objUser.getUsers();
    obj.subscribe(res=> {
    // console.log(res);
    this.newArray=res;
    // console.log(this.newArray[0].address.street)
    // console.log(this.newArray)
   })
   
  }

}
