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
import { DirectiveDirective } from './directive.directive';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TaskTempleteFormComponent } from './task-templete-form/task-templete-form.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ServiceTask1Component } from './service-task1/service-task1.component';
import { ServiceTask2Component } from './service-task2/service-task2.component';
import { HttpClientModule } from '@angular/common/http';
import { PracticeComponent } from './practice/practice.component';
import { TaskReactiveFormComponent } from './task-reactive-form/task-reactive-form.component';

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
    DirectiveDirective,
    SimpleFormComponent,
    FormTaskComponent,
    ReactiveformComponent,
    TaskTempleteFormComponent,
    Comp1Component,
    Comp2Component,
    ServiceTask1Component,
    ServiceTask2Component,
    PracticeComponent,
    TaskReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
