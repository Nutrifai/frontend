import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';  // Importando ActivatedRoute
import { DescubraComponent } from './descubra.component';

// Criando um mock do ActivatedRoute
const activatedRouteMock = {
  snapshot: { params: {} }  // Mock do snapshot, você pode ajustar os parâmetros conforme necessário
};

describe('DescubraComponent', () => {
  let component: DescubraComponent;
  let fixture: ComponentFixture<DescubraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescubraComponent], // Componente standalone
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }  // Fornecendo o mock do ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DescubraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
