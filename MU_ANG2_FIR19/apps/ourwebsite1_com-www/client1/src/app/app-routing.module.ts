import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
import { ProductViewerComponent } from './products/product-viewer/product-viewer.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: StoreComponent },
	{ path: 'products', redirectTo: 'products/page/1', pathMatch: 'full' },
	{ path: 'products/page/:nr', component: ProductsViewerComponent },
  { path: 'products/product/:id', component: ProductViewerComponent },
	{ path: 'products/product/:id/edit', component: ProductEditorComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:true});