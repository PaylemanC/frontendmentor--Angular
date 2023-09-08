import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveRatingComponent } from './interactive-rating.component';

describe('InteractiveRatingComponent', () => {
  let component: InteractiveRatingComponent;
  let fixture: ComponentFixture<InteractiveRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
