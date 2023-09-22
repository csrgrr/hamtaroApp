import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with themeToggle set to false', () => {
    component.initializeDarkTheme(true);
    expect(component.themeToggle).toBe(false);
  });

  it('should toggle the dark theme', () => {
    component.toggleDarkTheme(true);
    expect(document.body.classList.contains('dark')).toBe(true);

    component.toggleDarkTheme(false);
    expect(document.body.classList.contains('dark')).toBe(false);
  });

  it('should handle toggleChange event', () => {
    const mockEvent = { detail: { checked: true } };
    component.toggleChange(mockEvent);
    expect(document.body.classList.contains('dark')).toBe(true);

    mockEvent.detail.checked = false;
    component.toggleChange(mockEvent);
    expect(document.body.classList.contains('dark')).toBe(false);
  });
});
