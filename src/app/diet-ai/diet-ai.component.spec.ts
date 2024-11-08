import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietAiComponent } from './diet-ai.component';

describe('DietAiComponent', () => {
  let component: DietAiComponent;
  let fixture: ComponentFixture<DietAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
