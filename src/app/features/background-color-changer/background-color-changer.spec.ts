import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundColorChanger } from './background-color-changer';

describe('BackgroundColorChanger', () => {
  let component: BackgroundColorChanger;
  let fixture: ComponentFixture<BackgroundColorChanger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundColorChanger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundColorChanger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
