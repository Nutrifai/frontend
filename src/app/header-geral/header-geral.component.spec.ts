import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGeralComponent } from './header-geral.component';

describe('HeaderGeralComponent', () => {
  let component: HeaderGeralComponent;
  let fixture: ComponentFixture<HeaderGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGeralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
