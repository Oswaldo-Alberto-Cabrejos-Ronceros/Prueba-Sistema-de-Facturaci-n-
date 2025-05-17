import { TestBed } from '@angular/core/testing';

import { NavBarUserTemplateInjectorService } from './nav-bar-user-template-injector.service';

describe('NavBarUserTemplateInjectorService', () => {
  let service: NavBarUserTemplateInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBarUserTemplateInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
