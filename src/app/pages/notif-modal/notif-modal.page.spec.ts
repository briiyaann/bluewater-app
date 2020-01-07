import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifModalPage } from './notif-modal.page';

describe('NotifModalPage', () => {
  let component: NotifModalPage;
  let fixture: ComponentFixture<NotifModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
