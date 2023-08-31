import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    
   }

   getValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  checkUserNameAndPass(username: string, pass: string) {
    if (username == 'admin' && pass == 'admin77') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}