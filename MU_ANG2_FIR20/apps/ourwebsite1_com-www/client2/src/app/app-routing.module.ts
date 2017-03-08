import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
import { ProductViewerComponent } from './products/product-viewer/product-viewer.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';

const routes: Routes = [
  { path: 'client2', component: HomeComponent },
  { path: 'client2/home', component: HomeComponent },
  { path: 'client2/about', component: AboutComponent },
  { path: 'client2/store', component: StoreComponent },
	{ path: 'client2/products', redirectTo: 'client1/products/page/1', pathMatch: 'full' },
	{ path: 'client2/products/page/:nr', component: ProductsViewerComponent },
  { path: 'client2/product/:id', component: ProductViewerComponent },
	{ path: 'client2/product/:id/edit', component: ProductEditorComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:true});