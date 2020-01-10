import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoBackPage } from './go-back.page';

describe('GoBackPage', () => {
  let component: GoBackPage;
  let fixture: ComponentFixture<GoBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
