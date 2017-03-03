import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import "rxjs/add/operator/map";

import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {

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

  get(productId: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(this.extractData).catch(this.handleError);
  }

  insert(product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}/products/`, JSON.stringify(product), this.requestOptions).map(res => res.json()).catch(this.handleError);
  }

	update(product: Product): Observable<Product> {
		return this.http.put(`${this.baseUrl}/products/` + encodeURIComponent(product.id.toString()),
			JSON.stringify(product), this.requestOptions).map(res => res.json()).catch(this.handleError);	
	}

	delete(productId: number): Observable<Product> {
		return this.http.delete(`${this.baseUrl}/products/` + encodeURIComponent(productId.toString())).map(res => res.json()).catch(this.handleError);
	}

  getList(data): ProductsService {
		// room for additional filtering
		return data;
	}

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
