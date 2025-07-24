import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChallengeComponent } from './table-challenge.component';

describe('TableChallengeComponent', () => {
  let component: TableChallengeComponent;
  let fixture: ComponentFixture<TableChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
