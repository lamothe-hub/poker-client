import { TestBed } from '@angular/core/testing';

import { PlayerActionService } from './player-action.service';

describe('PlayerActionService', () => {
  let service: PlayerActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
