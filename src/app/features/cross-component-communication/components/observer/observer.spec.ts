import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observer } from './observer';

describe('Observer', () => {
  let component: Observer;
  let fixture: ComponentFixture<Observer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
