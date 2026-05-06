import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observer2 } from './observer-2';

describe('Observer2', () => {
  let component: Observer2;
  let fixture: ComponentFixture<Observer2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observer2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observer2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
