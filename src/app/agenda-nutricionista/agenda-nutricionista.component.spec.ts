import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaNutricionistaComponent } from './agenda-nutricionista.component';
import { DatepickerTouchExampleComponent } from '../datepicker-touch-example/datepicker-touch-example.component';

describe('AgendaNutricionistaComponent', () => {
  let component: AgendaNutricionistaComponent;
  let fixture: ComponentFixture<AgendaNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaNutricionistaComponent, DatepickerTouchExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
