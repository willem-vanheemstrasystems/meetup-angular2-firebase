import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../models/product.model';

// interface SelectItem { 
// 	value: string;
// 	label: string;
// }

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

	@Input()
	product: ProductModel = <ProductModel>{};

	@Output()
	saveProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

	@Output()
	deleteProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

	@Output()
	cancelProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

	// colors: SelectItem[] = [
	// 	{ value: 'red', label: 'Red' },
	// 	{ value: 'blue', label: 'Blue' },
	// 	{ value: 'green', label: 'Green' },
	// 	{ value: 'orange', label: 'Orange' },
	// 	{ value: 'yellow', label: 'Yellow' },
	// 	{ value: 'purple', label: 'Purple' }
	// ] 

	// sizes: SelectItem[] = [
	// 	{ value: 'tiny', label: 'Tiny' },
	// 	{ value: 'small', label: 'Small' },
	// 	{ value: 'medium', label: 'Medium' },
	// 	{ value: 'large', label: 'Large' },
	// 	{ value: 'huge', label: 'Huge' }
	// ] 

  constructor() { }

  ngOnInit() {
  }

	saveProductButton(product: ProductModel) {
		this.saveProduct.emit(product);
	}

	deleteProductButton(product: ProductModel) {
		this.deleteProduct.emit(product);
	}

	cancelProductButton(product: ProductModel) {
		this.cancelProduct.emit(product);
	}

}
