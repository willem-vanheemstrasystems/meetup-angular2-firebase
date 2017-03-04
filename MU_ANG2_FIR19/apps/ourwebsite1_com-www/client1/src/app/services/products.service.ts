import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

import { ProductModel } from '../models/product.model';
//START: ADDED
import { ProductsListResult } from "./products-list-result.interface";
import { ProductsBase } from "./products.base";
//END: ADDED

@Injectable()
export class ProductsService {

//START: ADDED
  products: ProductModel[] = ProductsBase;
//END: ADDED

  private baseUrl: string = 'http://localhost:8001/api';

	requestOptions: RequestOptions = new RequestOptions({
		headers: new Headers({ 'Content-Type': 'application/json' })
	});  

  constructor(private http: Http) { }

  getAll(offset: number = 0, limit: number = 2): Observable<ProductsService> {
    return this.http
      .get(`${this.baseUrl}/products/?offset=${offset}&limit=${limit}`)
      .map(response => response.json())
      .map(results => this.getList(results));
  }

  get(productId: number): Observable<ProductModel> {
    return this.http.get(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(this.extractData).catch(this.handleError);
  }

  insert(product: ProductModel): Observable<ProductModel> {
    return this.http.post(`${this.baseUrl}/products/`, JSON.stringify(product), this.requestOptions).map(res => res.json()).catch(this.handleError);
  }

	update(product: ProductModel): Observable<ProductModel> {
		return this.http.put(`${this.baseUrl}/products/` + encodeURIComponent(product.id.toString()),
			JSON.stringify(product), this.requestOptions).map(res => res.json()).catch(this.handleError);	
	}

	delete(productId: number): Observable<ProductModel> {
		return this.http.delete(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(res => res.json()).catch(this.handleError);
	}

  getList(data): ProductsService {
		// room for additional filtering
		return data;
	}

//START: ADDED
  list(search: string = null, page: number = 1, limit: number = 10): Observable<ProductsListResult<ProductModel>> {
    let productsResult = this.products.filter(function(product: ProductModel) {
        return (search) ? product.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    let productsResultPage = productsResult.slice((page - 1) * limit, page * limit);
    return Observable.of({totalProducts: productsResult.length, products: productsResultPage}).delay(100);
  }
//END: ADDED

	/**
	 * Pick the array that belongs to the key 'products'
	 * 
	 * e.g. { products:[our data is in here] }
	 */
	private extractData(res: Response) {
		let body = res.json();
		//console.log(body.products);
		return body.products || {};
	}

	/**
	 * Handle error
	 */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
    	// We'd also dig deeper into the error to get a better message
    	let errMsg = (error.message) ? error.message :
      	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg); // log to console instead
    	return Observable.throw(errMsg);
	}

}
