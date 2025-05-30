import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarSecondaryComponent } from './tab-bar-secondary.component';

describe('TabBarSecondaryComponent', () => {
  let component: TabBarSecondaryComponent;
  let fixture: ComponentFixture<TabBarSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBarSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
