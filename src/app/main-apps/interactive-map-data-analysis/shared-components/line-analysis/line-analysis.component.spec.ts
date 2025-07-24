import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAnalysisComponent } from './line-analysis.component';

describe('LineAnalysisComponent', () => {
  let component: LineAnalysisComponent;
  let fixture: ComponentFixture<LineAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
