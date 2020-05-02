import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/app/constants/constants';
import { HttpService } from 'src/app/service/http-common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Tendor } from 'src/app/interface/tendor-interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tendor',
  templateUrl: './tendor.component.html',
  styleUrls: ['./tendor.component.scss']
})
export class TendorComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns :string[]= ['id', 'start_date', 'end_date', 'price', 'status', 'color'];
  public records:Tendor[]=[];

  dataSource = new MatTableDataSource<Tendor>([]);

  
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.fetchRecords();
  }
  fetchRecords(){
    let url =environment.BASE_URL+Constants.FETCH_RECORDS;
    this.httpService.getMethod(url).subscribe((data:Tendor[])=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
