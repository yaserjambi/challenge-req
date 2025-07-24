import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImDataAnalysisListComponent } from './im-data-analysis-list.component';

describe('ImDataAnalysisListComponent', () => {
  let component: ImDataAnalysisListComponent;
  let fixture: ComponentFixture<ImDataAnalysisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImDataAnalysisListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImDataAnalysisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
