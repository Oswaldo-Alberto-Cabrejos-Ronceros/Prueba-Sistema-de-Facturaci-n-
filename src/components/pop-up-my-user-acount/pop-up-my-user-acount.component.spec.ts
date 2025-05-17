import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMyUserAcountComponent } from './pop-up-my-user-acount.component';

describe('PopUpMyUserAcountComponent', () => {
  let component: PopUpMyUserAcountComponent;
  let fixture: ComponentFixture<PopUpMyUserAcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpMyUserAcountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpMyUserAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
