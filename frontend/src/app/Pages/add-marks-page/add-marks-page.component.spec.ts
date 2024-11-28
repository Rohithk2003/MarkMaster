import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarksPageComponent } from './add-marks-page.component';

describe('AddMarksPageComponent', () => {
  let component: AddMarksPageComponent;
  let fixture: ComponentFixture<AddMarksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMarksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
