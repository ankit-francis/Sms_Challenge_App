import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesRoutes } from './features.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FeaturesRoutes)]
})
export class FeatureModule {}