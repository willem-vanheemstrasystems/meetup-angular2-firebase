import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss'],
	providers: [ ProductsService ]
})
export class ProductViewerComponent implements OnInit {

	product: ProductModel;

  constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productsService: ProductsService
  ) { }

  ngOnInit() {
		this.route.params.subscribe(params => {
			this.productsService.get(parseInt(params['id'], 10)).subscribe(product => this.product = product);
		});    
  }

	editProduct(productId: number) {
		this.router.navigate(["/client2/product", productId, "edit"]);
	}

	returnToList() {
		this.router.navigate(["/client2/products/"]);
	}

}
