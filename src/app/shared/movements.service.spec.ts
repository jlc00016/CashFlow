/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MovementsService } from './movements.service';

describe('Service: Movements', () => {
  beforeEach(() => {
    addProviders([MovementsService]);
  });

  it('should ...',
    inject([MovementsService],
      (service: MovementsService) => {
        expect(service).toBeTruthy();
      }));
});
