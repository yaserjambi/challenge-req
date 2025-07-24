import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractiveMapDataAnalysisRoutingModule } from './interactive-map-data-analysis-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImDataAnalysisListComponent } from './im-data-analysis-list/im-data-analysis-list.component';
import { PopupDataComponent } from './shared-components/popup-data/popup-data.component';
import { PieAnalysisComponent } from './shared-components/pie-analysis/pie-analysis.component';
import { LineAnalysisComponent } from './shared-components/line-analysis/line-analysis.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [ImDataAnalysisListComponent, PopupDataComponent, PieAnalysisComponent, LineAnalysisComponent],
  imports: [
    CommonModule,
    InteractiveMapDataAnalysisRoutingModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    MatTableModule,

  ]
})
export class InteractiveMapDataAnalysisModule { }
