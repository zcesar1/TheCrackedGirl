import { TestBed, inject } from '@angular/core/testing';

import { PortfolioserviceService } from './portfolioservice.service';

describe('PortfolioserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioserviceService]
    });
  });

  it('should be created', inject([PortfolioserviceService], (service: PortfolioserviceService) => {
    expect(service).toBeTruthy();
  }));
});
