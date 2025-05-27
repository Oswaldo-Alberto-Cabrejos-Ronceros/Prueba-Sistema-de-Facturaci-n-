import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsSerialsPageComponent } from './configurations-serials-page.component';

describe('ConfigurationsSerialsPageComponent', () => {
  let component: ConfigurationsSerialsPageComponent;
  let fixture: ComponentFixture<ConfigurationsSerialsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsSerialsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsSerialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
