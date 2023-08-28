import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, // localhost:4200/login
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'product', component: ProductComponent ,children: [          //for multiple router outlet
    // { path: '', component: ProductComponent}, // localhost:4200/product/laptop   **for single router outlet
    {path: 'laptop', component: LaptopComponent},
    { path: 'tv', component: TvComponent}, 
    {path: 'tablet', component: TabletComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ] },
  {path: 'post', component: PostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
