import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilePrimaryComponent } from './input-file-primary.component';

describe('InputFilePrimaryComponent', () => {
  let component: InputFilePrimaryComponent;
  let fixture: ComponentFixture<InputFilePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFilePrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFilePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
