import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTouchExampleComponent } from './datepicker-touch-example.component';

describe('DatepickerTouchExampleComponent', () => {
  let component: DatepickerTouchExampleComponent;
  let fixture: ComponentFixture<DatepickerTouchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerTouchExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerTouchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
