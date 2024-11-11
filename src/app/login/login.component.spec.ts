import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../service/user.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Nova abordagem
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        UserService,
        provideHttpClient(withInterceptorsFromDi())  // Novo método de fornecer HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
