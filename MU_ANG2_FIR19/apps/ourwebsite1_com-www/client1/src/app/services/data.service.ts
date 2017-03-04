import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

import { DataModel } from "../models/data.model";
import { ListResult } from "./list-result.interface";
import { DataBase } from "./data.base";

@Injectable()
export class DataService {
  data: DataModel[] = DataBase;

  constructor() { }

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<DataModel>> {
    console.log("DataService - list, this.data = ", this.data);
    let dataResult = this.data.filter(function(data: DataModel) {
        return (search) ? data.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    let dataResultPage = dataResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: dataResult.length, items: dataResultPage}).delay(100);
  }

}
