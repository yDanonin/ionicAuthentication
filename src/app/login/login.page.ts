import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder) {
    this.fGroup = this.fBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])],
      'password': ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
        
      ])]
    })
   }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.fGroup.value);
  }
}
