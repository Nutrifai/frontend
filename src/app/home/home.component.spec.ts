import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';  // Se for necessário mockar o ActivatedRoute
import { HomeComponent } from './home.component';

// Caso HomeComponent dependa do ActivatedRoute (ou outro serviço), criamos um mock:
const activatedRouteMock = {
  snapshot: { params: {} }  // Mock básico para a rota, altere conforme necessário
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],  // O componente standalone
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }  // Mock do ActivatedRoute, se necessário
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
