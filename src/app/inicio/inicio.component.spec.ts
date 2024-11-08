import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';  // Importando ActivatedRoute
import { InicioComponent } from './inicio.component';

// Criando um mock do ActivatedRoute
const activatedRouteMock = {
  snapshot: { params: {} }  // Mock do snapshot, você pode ajustar os parâmetros conforme necessário
};

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent], // Componente standalone
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }  // Fornecendo o mock do ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
