import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  
  data: string = 'Angular Batch 7';

  course=['Angular','React','Java','Tesing','Devops'];

  getDataFromChild(value) {
    console.log(value);   
   }
}
