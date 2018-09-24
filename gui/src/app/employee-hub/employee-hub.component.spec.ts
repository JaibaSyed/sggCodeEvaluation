import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHubComponent } from './employee-hub.component';

describe('EmployeeHubComponent', () => {
  let component: EmployeeHubComponent;
  let fixture: ComponentFixture<EmployeeHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
