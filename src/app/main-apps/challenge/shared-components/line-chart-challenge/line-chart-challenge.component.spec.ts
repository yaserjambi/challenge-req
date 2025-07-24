import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartChallengeComponent } from './line-chart-challenge.component';

describe('LineChartChallengeComponent', () => {
  let component: LineChartChallengeComponent;
  let fixture: ComponentFixture<LineChartChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineChartChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
