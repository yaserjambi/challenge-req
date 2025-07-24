import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main-apps/main-apps.module').then(m => m.MainAppsModule)
    },
];
