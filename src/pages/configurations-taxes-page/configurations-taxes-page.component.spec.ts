import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsTaxesPageComponent } from './configurations-taxes-page.component';

describe('ConfigurationsTaxesPageComponent', () => {
  let component: ConfigurationsTaxesPageComponent;
  let fixture: ComponentFixture<ConfigurationsTaxesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsTaxesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsTaxesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
