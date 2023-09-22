import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let modalController: ModalController;

  const mockCharacters = [
    {
      id: 1,
      name: "Hamtaro",
      image: "characters/image/Hamtaro.webp",
      description: "Hamtaro (ハム太郎) is a male hamster and the main character of the Hamtaro franchise. A happy and energetic hamster, Hamtaro lives out each day in the spirit of friendship and fun, and is always there to lend a helping hand.",
      species: "Hamster",
      gender: "male",
      date_of_birth: "August 6th",
      height: "8.6 cm"
    },
    {
      id: 2,
      name: "Bijou",
      image: "characters/image/Bijou.webp",
      description: "Bijou (リボンちゃん) is a female hamster with white fur and blue ribbons. She is an elegant and somewhat unworldly hamster; but she is not above getting dirty when she needs to help her friends, always acting very generous and helpful.",
      species: "Hamster",
      gender: "female",
      date_of_birth: "July 10th",
      height: "7.5cm"
    }
  ];

  const modalControllerStub = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve())
  };

  const httpClientStub = {
    get: jasmine.createSpy('get').and.returnValue(of(mockCharacters))
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        { provide: ModalController, useValue: modalControllerStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    modalController = TestBed.inject(ModalController);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on ngOnInit', () => {
    expect(component.charactersLoaded).toBeFalse();
    spyOn(component, 'getCharacters').and.returnValue(
      new Observable((observer) => {
        observer.next(mockCharacters)
      })
    );
    component.ngOnInit();
    expect(component.charactersLoaded).toBeTrue();
    expect(component.characters).toEqual(mockCharacters);

  });

  it('should create an error on ngOnInit', () => {
    
    spyOn(component, 'getCharacters').and.returnValue(
      new Observable((observer) => {
        observer.error(null);
      })
    );
    component.ngOnInit();
    
    expect(component.charactersLoaded).toBeFalse();
    
});
  
  it('should handle error response and set charactersLoaded to true', () => {
    spyOn(component, 'getCharacters').and.returnValue(
      new Observable((observer) => {
        observer.error('Error fetching characters');
      })
    );
    component['handleCharacterResponse'](null);
    expect(component.charactersLoaded).toBe(true);
    component['handleCharacterResponse'](mockCharacters);
  });


  it('should open modal when presentModal is called', async () => {
    const mockCharacter = mockCharacters[0];
    await component.presentModal(mockCharacter);
    expect(modalController.create).toHaveBeenCalledWith({
      component: jasmine.any(Function),
      componentProps: {
        character: mockCharacter
      }
    });
  });
});
