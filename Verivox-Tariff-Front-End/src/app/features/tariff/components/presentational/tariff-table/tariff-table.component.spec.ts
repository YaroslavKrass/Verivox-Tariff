import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffTableComponent } from './tariff-table.component';

describe('TariffTableComponent', () => {
  let component: TariffTableComponent;
  let fixture: ComponentFixture<TariffTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TariffTableComponent]
    });
    fixture = TestBed.createComponent(TariffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
