import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  username : string='';
  key='username';
  data: string = 'Angular Batch 7';

  course=['Angular','React','Java','Tesing','Devops'];

  // constructor(private localStorageService: AuthService){
  //   this.username = this.localStorageService.getValue(this.key);
  //   console.log("usrname:",this.username)
  // }
  getDataFromChild(value) {
    console.log(value);   
   }

   OnTextValuCHanges(val){
    this.data = val.value;
    alert(val.value);
  }
  
  clearLocalStorage(){
    localStorage.clear();
  }

 
}
