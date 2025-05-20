import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsProvidersLayoutComponent } from './clients-providers-layout.component';

describe('ClientsProvidersLayoutComponent', () => {
  let component: ClientsProvidersLayoutComponent;
  let fixture: ComponentFixture<ClientsProvidersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsProvidersLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsProvidersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
