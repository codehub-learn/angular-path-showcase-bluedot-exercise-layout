import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossComponentCommunication } from './cross-component-communication';

describe('CrossComponentCommunication', () => {
  let component: CrossComponentCommunication;
  let fixture: ComponentFixture<CrossComponentCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossComponentCommunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossComponentCommunication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
