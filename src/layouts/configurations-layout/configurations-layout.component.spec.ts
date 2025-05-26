import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsLayoutComponent } from './configurations-layout.component';

describe('ConfigurationsLayoutComponent', () => {
  let component: ConfigurationsLayoutComponent;
  let fixture: ComponentFixture<ConfigurationsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
