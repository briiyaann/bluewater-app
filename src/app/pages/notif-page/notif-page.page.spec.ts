import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotifPagePage } from './notif-page.page';

describe('NotifPagePage', () => {
  let component: NotifPagePage;
  let fixture: ComponentFixture<NotifPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotifPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
