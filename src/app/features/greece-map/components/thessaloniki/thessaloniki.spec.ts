import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thessaloniki } from './thessaloniki';

describe('Thessaloniki', () => {
  let component: Thessaloniki;
  let fixture: ComponentFixture<Thessaloniki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thessaloniki]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thessaloniki);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
