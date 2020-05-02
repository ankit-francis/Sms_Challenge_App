import { Routes } from '@angular/router';
import {TendorComponent} from '../../features/tendor/tendor.component'

export const FeaturesRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: TendorComponent
      },
    {
        path: 'tendors',
        pathMatch: 'full',
        component: TendorComponent
      }
];