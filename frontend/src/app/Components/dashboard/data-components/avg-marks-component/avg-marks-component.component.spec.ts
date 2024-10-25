import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMarksComponentComponent } from './avg-marks-component.component';

describe('AvgMarksComponentComponent', () => {
  let component: AvgMarksComponentComponent;
  let fixture: ComponentFixture<AvgMarksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgMarksComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgMarksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
