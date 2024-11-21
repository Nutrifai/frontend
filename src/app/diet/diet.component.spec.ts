import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Nova abordagem
import { DietComponent } from './diet.component';
import { DietService } from '../service/diet.service';

describe('DietComponent', () => {
  let component: DietComponent;
  let fixture: ComponentFixture<DietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietComponent],
      providers: [
        DietService,
        provideHttpClient(withInterceptorsFromDi())  // Novo método de fornecer HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
