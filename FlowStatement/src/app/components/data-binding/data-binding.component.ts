import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName : string = "Maysara";
  rollNo: number = 123;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Enter Full Name";
  divClassName: string = "bg-primary";
  selectedTest: string = "";

  constructor(private router: Router){
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
    //this.showWelcomeMessage();
  }
  navigateToAdmin(){
    this.router.navigateByUrl("/admin");
  }

  showWelcomeMessage(){
    alert("Welcome to angular 19")
  }
  onTestChnage(){
    console.log("Test Changed");
  }
}
