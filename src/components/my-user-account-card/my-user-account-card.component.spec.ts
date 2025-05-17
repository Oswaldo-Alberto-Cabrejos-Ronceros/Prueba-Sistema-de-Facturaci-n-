import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserAccountCardComponent } from './my-user-account-card.component';

describe('MyUserAccountCardComponent', () => {
  let component: MyUserAccountCardComponent;
  let fixture: ComponentFixture<MyUserAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUserAccountCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUserAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
