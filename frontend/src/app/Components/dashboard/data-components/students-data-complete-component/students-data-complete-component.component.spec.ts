import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDataCompleteComponentComponent } from './students-data-complete-component.component';

describe('StudentsDataCompleteComponentComponent', () => {
  let component: StudentsDataCompleteComponentComponent;
  let fixture: ComponentFixture<StudentsDataCompleteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsDataCompleteComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsDataCompleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
