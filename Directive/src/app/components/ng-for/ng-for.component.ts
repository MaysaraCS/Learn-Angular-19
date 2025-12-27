import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["city1", "city2", "city3", "city4", "city5"]
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
}
