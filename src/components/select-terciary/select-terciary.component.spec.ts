import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTerciaryComponent } from './select-terciary.component';

describe('SelectTerciaryComponent', () => {
  let component: SelectTerciaryComponent;
  let fixture: ComponentFixture<SelectTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
