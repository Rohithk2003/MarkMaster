import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksDetailsPageComponent } from './marks-details-page.component';

describe('MarksDetailsPageComponent', () => {
  let component: MarksDetailsPageComponent;
  let fixture: ComponentFixture<MarksDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarksDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
