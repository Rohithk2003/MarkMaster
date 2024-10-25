import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataComponentComponent } from './student-data-component.component';

describe('StudentDataComponentComponent', () => {
  let component: StudentDataComponentComponent;
  let fixture: ComponentFixture<StudentDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDataComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
