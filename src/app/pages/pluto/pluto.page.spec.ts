import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlutoPage } from './pluto.page';

describe('PlutoPage', () => {
  let component: PlutoPage;
  let fixture: ComponentFixture<PlutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
