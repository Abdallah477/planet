import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UranusPage } from './uranus.page';

describe('UranusPage', () => {
  let component: UranusPage;
  let fixture: ComponentFixture<UranusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UranusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UranusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
