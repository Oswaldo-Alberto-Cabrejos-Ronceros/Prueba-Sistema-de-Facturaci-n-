import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputSetTerciaryComponent } from './select-input-set-terciary.component';

describe('SelectInputSetTerciaryComponent', () => {
  let component: SelectInputSetTerciaryComponent;
  let fixture: ComponentFixture<SelectInputSetTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInputSetTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInputSetTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
