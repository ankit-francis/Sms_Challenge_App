import { Routes } from '@angular/router';
export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/features.module').then(m => m.FeatureModule)
    }
];