import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumptionFormComponent } from './consumption-form.component';
import { FormBuilder } from '@angular/forms';

describe('ConsumptionFormComponent', () => {
  let component: ConsumptionFormComponent;
  let fixture: ComponentFixture<ConsumptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder],
      declarations: [ConsumptionFormComponent]
    });
    fixture = TestBed.createComponent(ConsumptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
