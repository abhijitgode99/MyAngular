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
    TaskTempleteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
