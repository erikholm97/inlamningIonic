import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToSearchPage } from './how-to-search.page';

describe('HowToSearchPage', () => {
  let component: HowToSearchPage;
  let fixture: ComponentFixture<HowToSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
