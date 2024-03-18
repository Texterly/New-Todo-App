import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.scss'],
})
export class EmailValidationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      this.customeEmailValidator,
    ]),
  });

  getError(control: any): string {
    if (control.errors?.required && control.touched)
      return 'This field is required!';
    else if (control.errors?.emailError && control.touched)
      return 'Please enter valid email address!';
    else return '';
  }

  customeEmailValidator(control: AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if (!pattern.test(value) && control.touched)
      return {
        emailError: true,
      };
    else return null;
  }

  constructor() {}

  ngOnInit(): void {}

  // const ips =  [
  //   '10.10.50.140:5900',
  //   'doc1.test.com.ua:5900',
  //   'https://233-1172-0.test-t.da.com:443',
  //   'd.llanfairpwllgwyngyllrychwyrndrobwllllatysiliogogogoch.co.da:443',
  //   '10.10.50:5900',
  //   'doc1.test.com.ua:59sd00',
  //   'https://233-1172-0.tes.com:443',
  //   'llanfairpwllgwyngyllrychwyrndrobwllllatysiliogogogoch.co.da:443'
  // ];

  // const regexp = /^(([a-z]|\d|-|\/|:)+\.){1}(([a-z]|\d|-|\/)+\.){2}([a-z]|\d|-|\/)+(:\d+)?$/i;

  // for (const ip of ips) {
  //   console.log(ip, regexp.test(ip));
  // }
}
