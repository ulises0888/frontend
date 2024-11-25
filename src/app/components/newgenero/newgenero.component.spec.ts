import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgeneroComponent } from './newgenero.component';

describe('NewgeneroComponent', () => {
  let component: NewgeneroComponent;
  let fixture: ComponentFixture<NewgeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewgeneroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
