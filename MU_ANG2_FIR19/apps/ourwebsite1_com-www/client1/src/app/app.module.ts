import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent, DialogContent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchListPaginationComponent } from './shared/search-list-pagination/search-list-pagination.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { DataService } from './services/data.service';
import { StoreComponent } from './store/store.component';
import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
import { ProductsListComponent } from './products/shared/products-list/products-list.component';
import { ProductViewerComponent } from './products/product-viewer/product-viewer.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContent,
    AboutComponent,
    SearchListComponent,
    PaginationComponent,
    LoaderComponent,  
    SearchListPaginationComponent,
    StoreComponent,
    ProductsViewerComponent,
    ProductsListComponent,
    ProductViewerComponent,
    ProductEditorComponent
  ],
  entryComponents: [DialogContent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJa7gl2Qf4grJI2--AXdptakh_6YwOTmw'
    })    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
