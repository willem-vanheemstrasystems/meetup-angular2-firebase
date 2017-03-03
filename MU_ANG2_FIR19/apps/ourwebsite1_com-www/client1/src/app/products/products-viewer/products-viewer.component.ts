import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../shared/products-list/products-list.component';

@Component({
  selector: 'app-products-viewer',
  templateUrl: './products-viewer.component.html',
  styleUrls: ['./products-viewer.component.scss'],
	providers: [ ProductsService ]  
})
export class ProductsViewerComponent implements OnInit {

	products: Product[];

  constructor(
		private router: Router,
		private route: ActivatedRoute,    
		private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

	viewProduct(productId: number) {
		this.router.navigate(['product', productId]);
	}

	editProduct(productId: number) {
		this.router.navigate(['product', productId, 'edit']);
	}

}
