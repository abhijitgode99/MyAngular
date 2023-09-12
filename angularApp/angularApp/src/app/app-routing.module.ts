import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AuthgaurdGuard } from './AuthGuard/authguard.guard';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { FirebaseComponent } from './firebase/firebase.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, // localhost:4200/login
  {path: 'home',canActivate:[AuthgaurdGuard], component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  // {path: 'product', component: ProductComponent ,children: [          //for multiple router outlet
  //   // { path: '', component: ProductComponent}, // localhost:4200/product/laptop   **for single router outlet
  //   {path: 'laptop', component: LaptopComponent},
  //   { path: 'tv', component: TvComponent}, 
  //   {path: 'tablet', component: TabletComponent},
  //   {path: 'washingmachine', component: WashingmachineComponent}
  // ] },
  {path : 'electronics',loadChildren:'./electronics-model/electronics-model.module#ElectronicsModelModule'},
  { path: 'product',canActivate:[AuthgaurdGuard], loadChildren: './products/products.module#ProductsModule'},
  {path: 'post', component: PostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'logout',component:LogoutComponent},
  // {path: 'todo', component: TodoComponent},
  {path: 'todotask',component: TodotaskComponent},
  {path: 'rapidapi',component: RapidapiComponent},
  {path:'firebase',component:FirebaseComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//,{ preloadingStrategy: PreloadAllModules}