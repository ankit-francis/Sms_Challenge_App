import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './features/shared/features.module';
import { HttpService } from './service/http-common.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TendorComponent } from './features/tendor/tendor.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TendorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FeatureModule,
     HttpClientModule,
     AppMaterialModule
  ],
  providers: [HttpService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
