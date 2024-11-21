import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNutriComponent } from './select-nutri.component';

describe('SelectNutriComponent', () => {
  let component: SelectNutriComponent;
  let fixture: ComponentFixture<SelectNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectNutriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
