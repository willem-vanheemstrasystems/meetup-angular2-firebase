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
import { PaginationComponent } from './shared/pagination/pagination.component';
import { DataService } from './services/data.service';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContent,
    AboutComponent,
    SearchListComponent,
    PaginationComponent,
    StoreComponent
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
