import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImDataAnalysisListComponent } from './im-data-analysis-list/im-data-analysis-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ImDataAnalysisListComponent
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractiveMapDataAnalysisRoutingModule { }
