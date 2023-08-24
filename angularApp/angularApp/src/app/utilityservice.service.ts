import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityserviceService {


  userName = new Subject<any>();
  userDetails=new Subject<any>();
//  userName = new BehaviorSubject('UI developer');
//  userDetails=new BehaviorSubject('')
  
  
  constructor() { 
    console.log("inside utllitiy service",this.userDetails);
  }
}
