import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	@Input()
	products: Product[];

	@Output()
	viewProduct: EventEmitter<number> = new EventEmitter<number>();

	@Output()
	editProduct: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

	viewProductButton(productId: number) {
		this.viewProduct.emit(productId)
	}

	editProductButton(productId: number) {
		this.editProduct.emit(productId)
	}  

}
