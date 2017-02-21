import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RESTModule } from 'ng2-http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, DialogContent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { ToolsComponent } from './tools/tools.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultListComponent } from './result-list/result-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './shared/blog.service';
import { NewsComponent } from './news/news.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContent,
    AboutComponent,
    ToolsComponent,
    ButtonsComponent,
    CalculatorComponent,
    ResultListComponent,
    BlogComponent,
    NewsComponent,
    PaginationComponent,
    LoaderComponent
  ],
  entryComponents: [DialogContent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RESTModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJa7gl2Qf4grJI2--AXdptakh_6YwOTmw'
    })
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
