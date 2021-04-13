import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [
    new Employee("John", "Smith", "john.smith@example.com", 40000),
    new Employee("David", "Jones", "david.jones@something.com", 50000),
    new Employee("Gemma", "Anderson", "gemma.anderson@company.com", 50000),
    new Employee("Lucy", "Ericsson", "lucy.ericsson@1234.com", 40000)
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
