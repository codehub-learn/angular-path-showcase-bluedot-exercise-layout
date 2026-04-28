import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryViewer } from './country-viewer';

describe('CountryViewer', () => {
  let component: CountryViewer;
  let fixture: ComponentFixture<CountryViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
