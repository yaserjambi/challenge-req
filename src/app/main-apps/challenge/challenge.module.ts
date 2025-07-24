import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterChallengeComponent } from './shared-components/filter-challenge/filter-challenge.component';
import { TableChallengeComponent } from './shared-components/table-challenge/table-challenge.component';
import { PieChartChallengeComponent } from './shared-components/pie-chart-challenge/pie-chart-challenge.component';
import { LineChartChallengeComponent } from './shared-components/line-chart-challenge/line-chart-challenge.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ChallengeListComponent,
    FilterChallengeComponent,
    TableChallengeComponent,
    PieChartChallengeComponent,
    LineChartChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    MatTableModule,

  ]
})
export class ChallengeModule { }
