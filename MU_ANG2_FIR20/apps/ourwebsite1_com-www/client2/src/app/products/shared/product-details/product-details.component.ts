import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	@Input()
	product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
