import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollFromComponent } from './employee-payroll-from.component';

describe('EmployeePayrollFromComponent', () => {
  let component: EmployeePayrollFromComponent;
  let fixture: ComponentFixture<EmployeePayrollFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePayrollFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
