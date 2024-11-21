import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderGeralComponent } from './header-geral.component';

describe('HeaderGeralComponent', () => {
  let component: HeaderGeralComponent;
  let fixture: ComponentFixture<HeaderGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGeralComponent, RouterModule],  // Incluindo o RouterModule para ativar o roteamento
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }  // Mock do ActivatedRoute
      ]
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
