import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _route: Router) { 
    
  }

  ngOnInit() {
  }
  clearLocalStorage() {
    localStorage.clear();
    // this._route.navigate(['/login']);
  }
}
