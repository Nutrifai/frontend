import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaNutricionistaComponent } from './agenda-nutricionista.component';

describe('AgendaNutricionistaComponent', () => {
  let component: AgendaNutricionistaComponent;
  let fixture: ComponentFixture<AgendaNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaNutricionistaComponent]
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
