import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartChallengeComponent } from './pie-chart-challenge.component';

describe('PieChartChallengeComponent', () => {
  let component: PieChartChallengeComponent;
  let fixture: ComponentFixture<PieChartChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieChartChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
