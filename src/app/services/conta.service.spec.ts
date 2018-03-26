import { TestBed, inject } from '@angular/core/testing';

import { ContaService } from './conta.service';

describe('ContaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContaService]
    });
  });

  it('should be created', inject([ContaService], (service: ContaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
