import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmailValidationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EmailValidationComponent }
    ]),
    ReactiveFormsModule
  ]
})
export class EmailModule { }
