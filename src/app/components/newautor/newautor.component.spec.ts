import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewautorComponent } from './newautor.component';

describe('NewautorComponent', () => {
  let component: NewautorComponent;
  let fixture: ComponentFixture<NewautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewautorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
