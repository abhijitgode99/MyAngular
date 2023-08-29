import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from '../electronics/electronics.component';

const electroicsRoutes : Routes = [

  {path: 'electronics',component:ElectronicsComponent, children: [

  ] },
  // {path: 'electronics',component:ElectronicsComponent},
]

@NgModule({
  declarations: [
    ElectronicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(electroicsRoutes)
  ]
})
export class ElectronicsModelModule {

  constructor() {
    console.log('electronics Model called'); 
  }
 }
