import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsUnitsPageComponent } from './configurations-units-page.component';

describe('ConfigurationsUnitsPageComponent', () => {
  let component: ConfigurationsUnitsPageComponent;
  let fixture: ComponentFixture<ConfigurationsUnitsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsUnitsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsUnitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
