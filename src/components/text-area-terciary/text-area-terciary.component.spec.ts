import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaTerciaryComponent } from './text-area-terciary.component';

describe('TextAreaTerciaryComponent', () => {
  let component: TextAreaTerciaryComponent;
  let fixture: ComponentFixture<TextAreaTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
