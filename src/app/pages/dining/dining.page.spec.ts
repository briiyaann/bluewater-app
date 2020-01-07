import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiningPage } from './dining.page';

describe('DiningPage', () => {
  let component: DiningPage;
  let fixture: ComponentFixture<DiningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
