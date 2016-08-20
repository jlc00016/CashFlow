/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { HttpToolsService } from './http-tools.service';

describe('Service: HttpTools', () => {
  beforeEach(() => {
    addProviders([HttpToolsService]);
  });

  it('should ...',
    inject([HttpToolsService],
      (service: HttpToolsService) => {
        expect(service).toBeTruthy();
      }));
});
