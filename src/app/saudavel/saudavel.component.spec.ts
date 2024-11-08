import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudavelComponent } from './saudavel.component';

describe('SaudavelComponent', () => {
  let component: SaudavelComponent;
  let fixture: ComponentFixture<SaudavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudavelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
