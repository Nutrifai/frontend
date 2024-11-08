import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';  // Importando ActivatedRoute
import { ServicoComponent } from './servico.component';

// Criando um mock do ActivatedRoute
const activatedRouteMock = {
  snapshot: { params: {} }  // Mock do snapshot, você pode ajustar os parâmetros conforme necessário
};

describe('ServicoComponent', () => {
  let component: ServicoComponent;
  let fixture: ComponentFixture<ServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoComponent], // Componente standalone
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }  // Fornecendo o mock do ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
