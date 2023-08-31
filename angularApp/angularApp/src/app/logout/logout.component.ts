import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Output() childButtonClicked: EventEmitter<void> = new EventEmitter<void>();
  // @Output() valueSent: EventEmitter<string> = new EventEmitter<string>();

  clearLocalStorage() {
    this.childButtonClicked.emit();
  }

  //  username ;
  //  key="username"
  constructor(private _route: Router,private localStorageService: AuthService) { 

    // this.username = this.localStorageService.getValue(this.key);
    // this.valueSent.emit(this.username);
    localStorage.removeItem("usrname");
    this._route.navigate(['/login']);
  }

  ngOnInit() {
  }

}
