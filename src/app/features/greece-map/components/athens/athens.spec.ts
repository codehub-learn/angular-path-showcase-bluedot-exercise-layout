import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Athens } from './athens';

describe('Athens', () => {
  let component: Athens;
  let fixture: ComponentFixture<Athens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Athens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Athens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
