import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalibroComponent } from './datalibro.component';

describe('DatalibroComponent', () => {
  let component: DatalibroComponent;
  let fixture: ComponentFixture<DatalibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatalibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatalibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
