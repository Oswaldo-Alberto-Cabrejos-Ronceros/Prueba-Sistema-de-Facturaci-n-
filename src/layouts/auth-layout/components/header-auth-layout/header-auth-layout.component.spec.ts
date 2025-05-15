import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuthLayoutComponent } from './header-auth-layout.component';

describe('HeaderAuthLayoutComponent', () => {
  let component: HeaderAuthLayoutComponent;
  let fixture: ComponentFixture<HeaderAuthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAuthLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
