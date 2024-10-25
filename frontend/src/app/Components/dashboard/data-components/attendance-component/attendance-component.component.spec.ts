import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceComponentComponent } from './attendance-component.component';

describe('AttendenceComponentComponent', () => {
  let component: AttendenceComponentComponent;
  let fixture: ComponentFixture<AttendenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendenceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
