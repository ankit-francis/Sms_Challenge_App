import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/app/constants/constants';
import { HttpService } from 'src/app/service/http-common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Tendor } from 'src/app/interface/tendor-interface';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tendor',
  templateUrl: './tendor.component.html',
  styleUrls: ['./tendor.component.scss']
})
export class TendorComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public startDate:Date;
  public endDate:Date;
  public displayedColumns :string[]= ['id', 'start_date', 'end_date', 'price', 'status', 'color'];
  public records:Tendor[]=[];

  filter(){
    if(this.startDate !=undefined && this.endDate !=undefined){
      this.dataSource=new MatTableDataSource(this.records.filter(m => new Date(m.start_date) >this.startDate&& new Date(m.end_date) < this.endDate));
    }else{
    }
  }
  
  dataSource = new MatTableDataSource<Tendor>([]);

  
  constructor(private httpService:HttpService,public datepipe: DatePipe) { }

  ngOnInit() {
    this.fetchRecords();
  }
  fetchRecords(){
    let url =environment.BASE_URL+Constants.FETCH_RECORDS;
    this.httpService.getMethod(url).subscribe((data:Tendor[])=>{
      this.records=data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
