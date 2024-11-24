import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ListaDietasComponent } from './lista-dietas.component'

describe('ListaDietasComponent', () => {
  let component: ListaDietasComponent;
  let fixture: ComponentFixture<ListaDietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],  // Incluindo o RouterModule para ativar o roteamento
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } }  // Mock do ActivatedRoute
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
