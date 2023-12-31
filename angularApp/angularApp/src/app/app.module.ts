import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { NewChildComponent } from './new-child/new-child.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TaskTempleteFormComponent } from './task-templete-form/task-templete-form.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ServiceTask1Component } from './service-task1/service-task1.component';
import { ServiceTask2Component } from './service-task2/service-task2.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PracticeComponent } from './practice/practice.component';
import { TaskReactiveFormComponent } from './task-reactive-form/task-reactive-form.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { UserComponent } from './user/user.component';
import { FilterUserPipe } from './filter-user.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UltilityModule } from './ultility.module';
import { HookComponent } from './hook/hook.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HeadersInterceptorService } from './headers-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    Demo2Component,
    DemoComponent,
    Demo3Component,
    ChildComponent,
    NewChildComponent,
    NgifComponent,
    NgforComponent,
    NgSwitchCaseComponent,
    AttributeComponent,
    SimpleFormComponent,
    FormTaskComponent,
    ReactiveformComponent,
    TaskTempleteFormComponent,
    Comp1Component,
    Comp2Component,
    ServiceTask1Component,
    ServiceTask2Component,
    PracticeComponent,
    TaskReactiveFormComponent,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilterpipeComponent,
    UserComponent,
    FilterUserPipe,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    PageNotFoundComponent,
    PostComponent,
    PostdetailsComponent,
    HookComponent,
    MenuBarComponent,
    LogoutComponent,
    TodoComponent,
    TodotaskComponent,
    RapidapiComponent,
    FirebaseComponent,
    TaskManagerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UltilityModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    console.log('AppModule called');
    
  }
}
