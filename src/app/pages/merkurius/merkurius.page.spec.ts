import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerkuriusPage } from './merkurius.page';

describe('MerkuriusPage', () => {
  let component: MerkuriusPage;
  let fixture: ComponentFixture<MerkuriusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerkuriusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerkuriusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
