import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBatchPageComponent } from './add-batch-page.component';

describe('AddBatchPageComponent', () => {
  let component: AddBatchPageComponent;
  let fixture: ComponentFixture<AddBatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBatchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
