import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpOptionsCheckReturnComponent } from './pop-up-options-check-return.component';

describe('PopUpOptionsCheckReturnComponent', () => {
  let component: PopUpOptionsCheckReturnComponent;
  let fixture: ComponentFixture<PopUpOptionsCheckReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpOptionsCheckReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpOptionsCheckReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
