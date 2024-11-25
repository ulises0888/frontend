import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweditorialComponent } from './neweditorial.component';

describe('NeweditorialComponent', () => {
  let component: NeweditorialComponent;
  let fixture: ComponentFixture<NeweditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeweditorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeweditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
