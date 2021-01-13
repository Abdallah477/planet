import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeptunusPage } from './neptunus.page';

describe('NeptunusPage', () => {
  let component: NeptunusPage;
  let fixture: ComponentFixture<NeptunusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeptunusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeptunusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
