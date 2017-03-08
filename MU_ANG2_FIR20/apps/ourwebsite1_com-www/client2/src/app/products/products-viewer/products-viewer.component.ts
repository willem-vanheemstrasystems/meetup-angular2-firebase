import { Component, OnInit, Renderer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../shared/products-list/products-list.component';

@Component({
  selector: 'app-products-viewer',
  templateUrl: './products-viewer.component.html',
  styleUrls: ['./products-viewer.component.scss'],
	providers: [ ProductsService ]  
})
export class ProductsViewerComponent implements OnInit {

  count: number = 0;
  offset: number = 0;
  limit: number = 10; // choose an appropriate number
	range: number = 0; // not enough space for more
	products: ProductModel[];
  loading: boolean = false;
  failed: boolean = false;

  constructor(
		private router: Router,
		private route: ActivatedRoute,    
		private productsService: ProductsService
  ) { }

  ngOnInit() {
		let observable = this.route.params
		  .map(params => params['nr'])
			.map(pageNr => (pageNr - 1) * this.limit);
		observable.subscribe(offset => this.offset = offset);
		observable.share().subscribe(offset => this.getAll(offset, this.limit));
  }

	getAll(offset: number, limit: number) {
	  //console.log("ProductsViewerComponent - getAll, offset = ", offset, " limit = ", limit);
		this.products = [];
		this.loading = true;
		this.failed = false;
		this.productsService.getAll(offset, limit).subscribe(result => {
	    //console.log("ProductsViewerComponent - getAll - result = ", result);
	    this.products = result['products'];
			//console.log("ProductsViewerComponent - getAll - this.products = ", this.products);
	    this.count = result['count'];
			//console.log("ProductsViewerComponent - getAll - this.count = ", this.count);		
			this.loading = false;
		}, () => {
			this.loading = false;
			this.failed = true;
		});
	}

	viewProduct(productId: number) {
		console.log("ProductsViewerComponent - viewProduct called with productId = ", productId);
    this.router.navigate(['/client2/product', productId]);
	}

	editProduct(productId: number) {
		console.log("ProductsViewerComponent - editProduct called with productId = ", productId);
    this.router.navigate(['/client2/product', productId, 'edit']);
	}

  onPageChange(offset) {
		console.log("ProductsViewerComponent - onPageChange called with offset = ", offset);
    this.offset = offset;
    this.router.navigate(['/client2/products/page', (offset / this.limit) + 1]);
  }

}
