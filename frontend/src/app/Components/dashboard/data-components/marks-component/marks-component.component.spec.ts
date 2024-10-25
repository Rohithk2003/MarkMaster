import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksComponentComponent } from './marks-component.component';

describe('MarksComponentComponent', () => {
  let component: MarksComponentComponent;
  let fixture: ComponentFixture<MarksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarksComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
