import { TestBed } from '@angular/core/testing';

import { TemplateDrivenFormService } from './template-driven-form.service';

describe('TemplateDrivenFormService', () => {
  let service: TemplateDrivenFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateDrivenFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
