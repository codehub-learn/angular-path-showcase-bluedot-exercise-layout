import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeceMap } from './greece-map';

describe('GreeceMap', () => {
  let component: GreeceMap;
  let fixture: ComponentFixture<GreeceMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreeceMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreeceMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
