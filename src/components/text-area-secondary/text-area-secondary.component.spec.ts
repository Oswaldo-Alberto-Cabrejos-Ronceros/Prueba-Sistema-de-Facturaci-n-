import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaSecondaryComponent } from './text-area-secondary.component';

describe('TextAreaSecondaryComponent', () => {
  let component: TextAreaSecondaryComponent;
  let fixture: ComponentFixture<TextAreaSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
