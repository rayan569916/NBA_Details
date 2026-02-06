import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaDashboard } from './nda.dashboard';

describe('NdaDashboard', () => {
  let component: NdaDashboard;
  let fixture: ComponentFixture<NdaDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdaDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdaDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
