import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalLayoutComponent } from './menu-principal-layout.component';

describe('MenuPrincipalLayoutComponent', () => {
  let component: MenuPrincipalLayoutComponent;
  let fixture: ComponentFixture<MenuPrincipalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrincipalLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
