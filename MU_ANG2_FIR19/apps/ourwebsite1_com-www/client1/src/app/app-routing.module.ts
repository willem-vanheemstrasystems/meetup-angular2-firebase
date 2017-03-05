import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
import { ProductViewerComponent } from './products/product-viewer/product-viewer.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';

const routes: Routes = [
  { path: 'client1', component: HomeComponent },
  { path: 'client1/home', component: HomeComponent },
  { path: 'client1/about', component: AboutComponent },
  { path: 'client1/store', component: StoreComponent },
	{ path: 'client1/products', redirectTo: 'client1/products/page/1', pathMatch: 'full' },
	{ path: 'client1/products/page/:nr', component: ProductsViewerComponent },
  { path: 'client1/product/:id', component: ProductViewerComponent },
	{ path: 'client1/product/:id/edit', component: ProductEditorComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:true});