import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { AboutComponent } from './about/about.component';
//import { AgmCoreModule } from 'angular2-google-maps/core';
// import { SearchListComponent } from './search-list/search-list.component';
// import { SearchListPaginationComponent } from './shared/search-list-pagination/search-list-pagination.component';
// import { PaginationComponent } from './shared/pagination/pagination.component';
// import { LoaderComponent } from './shared/loader/loader.component';
// import { QuestionsService } from './services/questions.service';
// import { QuestionnairesService } from './services/questionnaires.service';
// import { DataService } from './services/data.service';
// import { FilterPipe } from './pipes/filter.pipe';
// import { StoreComponent } from './store/store.component';
// import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
// import { ProductsListComponent } from './products/shared/products-list/products-list.component';
// import { ProductViewerComponent } from './products/product-viewer/product-viewer.component';
// import { ProductEditorComponent } from './products/product-editor/product-editor.component';
// import { ProductDetailsComponent } from './products/shared/product-details/product-details.component';
// import { ProductFormComponent } from './products/shared/product-form/product-form.component';
// import { QuestionnaireViewerComponent } from './questionnaires/questionnaire-viewer/questionnaire-viewer.component';
// import { QuestionnaireListComponent } from './questionnaires/shared/questionnaire-list/questionnaire-list.component';
// import { QuestionComponent } from './questions/question/question.component';
// import { QuestionsViewerComponent } from './questions/questions-viewer/questions-viewer.component';
// import { QuestionsListComponent } from './questions/shared/questions-list/questions-list.component';
// import { QuestionViewerComponent } from './questions/question-viewer/question-viewer.component';
// import { QuestionEditorComponent } from './questions/question-editor/question-editor.component';
// import { QuestionDetailsComponent } from './questions/shared/question-details/question-details.component';
// import { QuestionFormComponent } from './questions/shared/question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // DialogContent,
    // AboutComponent,
    // SearchListComponent,
    // PaginationComponent,
    // FilterPipe,
    // LoaderComponent,  
    // SearchListPaginationComponent,
    // StoreComponent,
    // ProductsViewerComponent,
    // ProductsListComponent,
    // ProductViewerComponent,
    // ProductEditorComponent,
    // ProductDetailsComponent,
    // ProductFormComponent,
    // QuestionComponent,
    // QuestionnaireViewerComponent,
    // QuestionnaireListComponent,
    // QuestionsViewerComponent,
    // QuestionsListComponent,
    // QuestionViewerComponent,
    // QuestionEditorComponent,
    // QuestionDetailsComponent,
    // QuestionFormComponent    
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,    
    AppRoutingModule//,
    // MaterialModule//,
    //AgmCoreModule.forRoot({
    //  apiKey: 'AIzaSyBJa7gl2Qf4grJI2--AXdptakh_6YwOTmw'
    //})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
