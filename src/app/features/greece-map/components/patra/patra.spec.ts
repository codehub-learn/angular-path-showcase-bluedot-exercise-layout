import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patra } from './patra';

describe('Patra', () => {
  let component: Patra;
  let fixture: ComponentFixture<Patra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
