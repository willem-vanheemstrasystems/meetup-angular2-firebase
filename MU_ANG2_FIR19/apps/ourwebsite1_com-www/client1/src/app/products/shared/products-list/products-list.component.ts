//START: PRODUCTS-LIST
//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {                    Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../../../services/products.service";
import { ProductModel } from '../../../models/product.model';
//END: PRODUCTS-LIST

//START: SEARCH-LIST
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from "rxjs";
//import { DataService } from "../../../services/data.service";
//import { DataModel } from "../../../models/data.model";
//END: SEARCH-LIST

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  filterReports: string = '';

//START: PRODUCTS-LIST
	@Input()
	products: ProductModel[];
//END: PRODUCTS-LIST	

//START: PRODUCTS-LIST
	@Input()
	count: number;
//END: PRODUCTS-LIST

//START: PRODUCTS-LIST
	@Output()
	viewProduct: EventEmitter<number> = new EventEmitter<number>();
//END: PRODUCTS-LIST	

//START: PRODUCTS-LIST
	@Output()
	editProduct: EventEmitter<number> = new EventEmitter<number>();
//END: PRODUCTS-LIST	

//START: SEARCH-LIST
//  total$: Observable<number>;
//  items$: Observable<DataModel[]>;
//END: SEARCH-LIST
//START: PRODUCTS-LIST
//  totalProducts$: Observable<number>;
//  products$: Observable<ProductModel[]>;
//END: PRODUCTS-LIST

//START: SEARCH-LIST
  terms: string = "";
  private searchTermStream = new Subject<string>();

  page: number = 1;
  private pageStream = new Subject<number>();	
//END: SEARCH-LIST

  constructor(
		protected productsService: ProductsService,
		//protected dataService: DataService
		) { }

  ngOnInit() {
		console.log("ProductsListComponent - ngOnInit(), this.products", this.products);
//START: SEARCH-LIST		
//    const searchSource = this.searchTermStream
//      .debounceTime(1000)
//      .distinctUntilChanged()
//      .map(searchTerm => {
//        this.terms = searchTerm;
//        return {search: searchTerm, page: 1}
//      });
//END: SEARCH-LIST
//START: PRODUCTS-LIST

    // ADDED TO TEMPORARILY OVERWRITE THE products
		// this.products = [
		//   new ProductModel(1, "She Made Them Do It", "http://www.imdb.com", "Completed")
		// ];

    // const searchSourceProducts = this.searchTermStream
    //   .debounceTime(1000)
    //   .distinctUntilChanged()
    //   .map(searchTerm => {
    //     this.terms = searchTerm;
    //     return {products: this.products, search: searchTerm, page: 1}
    //   });
//END : PRODUCTS-LIST
//START: SEARCH-LIST
//    const pageSource = this.pageStream.map(pageNumber => {
//      this.page = pageNumber;
//      return {search: this.terms, page: pageNumber}
//    });
//END: SEARCH-LIST
//START: PRODUCTS-LIST
    // const pageSourceProducts = this.pageStream.map(pageNumber => {
		// 	this.page = pageNumber;
		// 	return {products: this.products, search: this.terms, page: pageNumber}
		// });
//END : PRODUCTS-LIST
//START: SEARCH-LIST
//    const source = pageSource
//      .merge(searchSource)
//      .startWith({search: this.terms, page: this.page})
//      .switchMap((params: {search: string, page: number}) => {
//        return this.dataService.list(params.search, params.page)
//      })
//      .share();
//END: SEARCH-LIST
//START: PRODUCTS-LIST
    // const sourceProducts = pageSourceProducts
		//   .merge(searchSourceProducts)
    //   .startWith({products: this.products, search: this.terms, page: this.page})
		// 	.switchMap((params: {products: ProductModel[], search: string, page: number}) => {
		// 		return this.productsService.list(params.products, params.search, params.page)
		// 	})
		// 	.share();
//END : PRODUCTS-LIST
//START: SEARCH-LIST
//    this.total$ = source.pluck('total');
//    this.items$ = source.pluck('items');
//END: SEARCH-LIST		
//START: PRODUCTS-LIST
    // this.totalProducts$ = sourceProducts.pluck('totalProducts');
    // this.products$ = sourceProducts.pluck('products');
//END : PRODUCTS-LIST		
  }

//START: SEARCH-LIST
  search(terms: string) {
    this.searchTermStream.next(terms)
  }

  goToPage(page: number) {
    this.pageStream.next(page)
  }
//END: SEARCH-LIST

//START: PRODUCTS-LIST
	viewProductButton(productId: number) {
		this.viewProduct.emit(productId)
	}

	editProductButton(productId: number) {
		this.editProduct.emit(productId)
	}  
//END: PRODUCTS-LIST
}
