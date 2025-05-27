import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsBusinessPageComponent } from './configurations-business-page.component';

describe('ConfigurationsBusinessPageComponent', () => {
  let component: ConfigurationsBusinessPageComponent;
  let fixture: ComponentFixture<ConfigurationsBusinessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsBusinessPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsBusinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
