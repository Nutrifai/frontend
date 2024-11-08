import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComponent } from './cadastro.component';
import { UserService } from '../service/user.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Nova abordagem

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroComponent],  // Componente standalone
      providers: [
        UserService,
        provideHttpClient(withInterceptorsFromDi())  // Novo método de fornecer HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
