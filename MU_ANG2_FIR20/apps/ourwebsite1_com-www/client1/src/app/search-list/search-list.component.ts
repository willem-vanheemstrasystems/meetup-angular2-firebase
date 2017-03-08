import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from "rxjs";

import { DataService } from "../services/data.service";
import { DataModel } from "../models/data.model";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  total$: Observable<number>;
  items$: Observable<DataModel[]>;

  terms: string = "";
  private searchTermStream = new Subject<string>();

  page: number = 1;
  private pageStream = new Subject<number>();

  constructor(protected dataService: DataService) { }

  ngOnInit() {
    const searchSource = this.searchTermStream
      .debounceTime(1000)
      .distinctUntilChanged()
      .map(searchTerm => {
        this.terms = searchTerm;
        return {search: searchTerm, page: 1}
      });

    const pageSource = this.pageStream.map(pageNumber => {
      this.page = pageNumber;
      return {search: this.terms, page: pageNumber}
    });

    const source = pageSource
      .merge(searchSource)
      .startWith({search: this.terms, page: this.page})
      .switchMap((params: {search: string, page: number}) => {
        return this.dataService.list(params.search, params.page)
      })
      .share();

    this.total$ = source.pluck('total');
    this.items$ = source.pluck('items');
  }

  search(terms: string) {
    this.searchTermStream.next(terms)
  }

  goToPage(page: number) {
    this.pageStream.next(page)
  }

}
