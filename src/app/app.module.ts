import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoModule } from './components/todo/todo.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { UserComponent } from './components/user/user.component';
import { EmailValidationComponent } from './components/email-validation/email-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    UserComponent,
    EmailValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
