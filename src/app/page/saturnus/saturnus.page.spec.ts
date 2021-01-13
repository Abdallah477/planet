import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaturnusPage } from './saturnus.page';

describe('SaturnusPage', () => {
  let component: SaturnusPage;
  let fixture: ComponentFixture<SaturnusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturnusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaturnusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
