import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TellusPage } from './tellus.page';

describe('TellusPage', () => {
  let component: TellusPage;
  let fixture: ComponentFixture<TellusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TellusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
