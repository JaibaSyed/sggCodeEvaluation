import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-hub',
  templateUrl: './employee-hub.component.html',
  styleUrls: ['./employee-hub.component.css']
})
export class EmployeeHubComponent implements OnInit {
  public isCollapsed = true;
  public registerForm: FormGroup;
  private response;
  private empList = [];
  private showTable: boolean = false;
  private name;
  private displayEmp = [];

  constructor(private formBuilder: FormBuilder, private service: EmployeeService) { }

  ngOnInit() {
    console.log("in ngonit")
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      dob: ['', [Validators.required, this.PastdateValidation]],
      department: ['']
    });
    this.getAllEmployees();
  }
  public getAllEmployees() {
    this.service.allEmployees().subscribe(
      data => {
        this.empList = data['entity'];
        this.displayEmp = this.empList;
        if (this.empList.length > 0)
          this.showTable = true;
      },
      err => {
        this.showTable = false;
      }
    );
  }
  submit() {
    console.log(this.registerForm.value.dob);
    this.service.addEmployee(this.registerForm.value).subscribe(
      data => {
        this.response = data['_body'];
        this.ngOnInit();
      }
    )

  }

  Search() {
    this.empList.filter(rec => rec.firstName == this.name || rec.lastName == this.name).forEach(r => {
      this.displayEmp = []
      this.displayEmp.push(r)
    }
    );
  }
  resetSearch() {
    this.name = '';
    this.displayEmp = this.empList;
  }
  getEmpList() {
    return this.displayEmp;
  }
  PastdateValidation(control) {
    let currDate = new Date();
    if (currDate.getDate() <= (new Date(control.value).getDate())) {
      return { isValid: true };
    }
    return null;
  }
}
