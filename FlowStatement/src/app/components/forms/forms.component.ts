import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  userForm: FormGroup = new FormGroup({
    fname: new FormControl("",[Validators.required]),
    lname: new FormControl("",[Validators.required, Validators.minLength(5)]),
    userName: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl("City 1"),
    zipCode: new FormControl(""),
    isAgeree: new FormControl(false),
  })

  constructor(){
    this.userForm.controls['state'].disable();
    setTimeout(()=>{
      this.userForm.controls['state'].enable();
    },5000);
    const isValid = this.userForm.valid;
  }

  onUserSave(){
    this.userForm =  this.userForm.value;
    debugger;
  }
}
