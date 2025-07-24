import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAnalysisComponent } from './pie-analysis.component';

describe('PieAnalysisComponent', () => {
  let component: PieAnalysisComponent;
  let fixture: ComponentFixture<PieAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
