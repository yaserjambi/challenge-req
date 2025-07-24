import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'challenge/list',
    pathMatch: 'full'
  },
  {
    path: 'challenge',
    loadChildren: () => import('./challenge/challenge.module').then(m => m.ChallengeModule)
  },
  {
    path: 'interactive-map-data-analysis',
    loadChildren: () => import('./interactive-map-data-analysis/interactive-map-data-analysis.module').then(m => m.InteractiveMapDataAnalysisModule)
  },
  {
    path: '**',
    redirectTo: 'challenge/list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
