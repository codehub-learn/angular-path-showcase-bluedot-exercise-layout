import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycle } from './component-lifecycle';

describe('ComponentLifecycle', () => {
  let component: ComponentLifecycle;
  let fixture: ComponentFixture<ComponentLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifecycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifecycle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
