import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonAttendenceComponentComponent } from './lesson-attendence-component.component';

describe('LessonAttendenceComponentComponent', () => {
  let component: LessonAttendenceComponentComponent;
  let fixture: ComponentFixture<LessonAttendenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonAttendenceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonAttendenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
