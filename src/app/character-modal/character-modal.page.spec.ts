import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { CharacterModalPage } from './character-modal.page';
import { NavParams } from '@ionic/angular';

describe('CharacterModalPage', () => {
  let component: CharacterModalPage;
  let fixture: ComponentFixture<CharacterModalPage>;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;

  beforeEach(async(() => {
    const navParamsStub = {
      get: jasmine.createSpy('get').and.returnValue({}),
    };

    const modalControllerSpyObj = jasmine.createSpyObj('ModalController', [
      'dismiss',
    ]);

    TestBed.configureTestingModule({
      declarations: [CharacterModalPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: NavParams, useValue: navParamsStub },
        { provide: ModalController, useValue: modalControllerSpyObj },
      ],
    }).compileComponents();

    modalControllerSpy = TestBed.inject(ModalController) as jasmine.SpyObj<
      ModalController
    >;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal', () => {
    component.closeModal();
    expect(modalControllerSpy.dismiss).toHaveBeenCalled();
  });
});
