import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as http from "node:http";

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  key = '4fdb9c7b1e-4a0b6b6020-slnlg7';

  constructor(private http:HttpClient) { }

  public exchange(from:any,to:any):Observable<any>{

    const options = {method: 'GET', headers: {accept: 'application/json'}};
    return this.http.get('https://api.fastforex.io/fetch-one?from='+from+'&to='+to+'&api_key='+this.key,options);
  }


}
