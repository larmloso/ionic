import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AECPage } from './aec.page';

describe('AECPage', () => {
  let component: AECPage;
  let fixture: ComponentFixture<AECPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AECPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AECPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
