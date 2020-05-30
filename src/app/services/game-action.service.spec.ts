import { TestBed } from '@angular/core/testing';

import { GameActionService } from './game-action.service';

describe('GameActionService', () => {
  let service: GameActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
