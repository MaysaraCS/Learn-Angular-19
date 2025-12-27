import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  div1vissibale: boolean = true;

  isChecked: boolean =  false;

  dayName: string = '';

  // array of object 
  employeeArray: any[] = [
    {
      empId:121, 
      name:'AAA',
      city:'city one',
      contactNumber:'11111'
    },
    {
      empId:51515, 
      name:'bbb',
      city:'city two',
      contactNumber:'222'
    },
    {
      empId:333, 
      name:'ccc',
      city:'city three',
      contactNumber:'8888'
    },
    {
      empId:999, 
      name:'lll',
      city:'city four',
      contactNumber:'84515'
    },
  ]
  
  cityList: string[] = [
    "city1",
    "city2",
    "city3",
    "city4"
  ];

  hideShowDiv1(isShow: boolean){
    this.div1vissibale =  isShow;
  }
}
