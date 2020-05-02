import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
     MatSortModule,
     MatPaginatorModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class AppMaterialModule { }
