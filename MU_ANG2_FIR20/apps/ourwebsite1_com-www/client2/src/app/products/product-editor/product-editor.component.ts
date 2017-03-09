import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

import { ProductFormComponent } from '../shared/product-form/product-form.component';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss'],
	providers: [ ProductsService ]
})
export class ProductEditorComponent implements OnInit {

	product: ProductModel = <ProductModel>{};

  constructor(
		private productsService: ProductsService,
		private router: Router,
		private route: ActivatedRoute    
  ) { }

  ngOnInit() {
		this.route.params.subscribe(params =>
			this.productsService.get(parseInt(params['id'],10)).subscribe(product =>
				this.product = product));    
  }

	saveProduct(product: ProductModel) {

		(product.id
			? this.productsService.update(product)
			: this.productsService.insert(product))
			.subscribe(product => {
				this.router.navigate(["/products/"]);
			});
		
	}

	deleteProduct(product: ProductModel) {

		if (confirm('Are you sure you want to delete this product?')) {
			this.productsService.delete(product.id).subscribe(product =>
				this.router.navigate(["/products/"]));
		}

	}

	cancelProduct(product: ProductModel) {
		this.router.navigate(["/products/"]);
	}


}
