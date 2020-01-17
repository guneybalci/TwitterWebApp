/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TweetsService } from './tweets.service';

describe('Service: Tweets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetsService]
    });
  });

  it('should ...', inject([TweetsService], (service: TweetsService) => {
    expect(service).toBeTruthy();
  }));
});
