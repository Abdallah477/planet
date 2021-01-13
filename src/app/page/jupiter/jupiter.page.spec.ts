import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JupiterPage } from './jupiter.page';

describe('JupiterPage', () => {
  let component: JupiterPage;
  let fixture: ComponentFixture<JupiterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JupiterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JupiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
