import { TestBed } from '@angular/core/testing';

import { BrodcastChannelThemeService } from './broadcast-channel-theme.service';

describe('BrodcastChannelThemeService', () => {
  let service: BrodcastChannelThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrodcastChannelThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
