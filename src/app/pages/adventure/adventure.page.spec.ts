import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdventurePage } from './adventure.page';

describe('AdventurePage', () => {
  let component: AdventurePage;
  let fixture: ComponentFixture<AdventurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdventurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
