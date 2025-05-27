import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsCurrenciesPageComponent } from './configurations-currencies-page.component';

describe('ConfigurationsCurrenciesPageComponent', () => {
  let component: ConfigurationsCurrenciesPageComponent;
  let fixture: ComponentFixture<ConfigurationsCurrenciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsCurrenciesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsCurrenciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
