import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private Http:HttpClient) { }
  
  getMethod(url:string){
      return this.Http.get(url);
  }

}