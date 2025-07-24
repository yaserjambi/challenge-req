import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChallengeComponent } from './filter-challenge.component';

describe('FilterChallengeComponent', () => {
  let component: FilterChallengeComponent;
  let fixture: ComponentFixture<FilterChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
