import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaPlayers } from './nba.players';

describe('NbaPlayers', () => {
  let component: NbaPlayers;
  let fixture: ComponentFixture<NbaPlayers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaPlayers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaPlayers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
