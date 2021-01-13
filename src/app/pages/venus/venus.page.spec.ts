import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenusPage } from './venus.page';

describe('VenusPage', () => {
  let component: VenusPage;
  let fixture: ComponentFixture<VenusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
