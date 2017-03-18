import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ProductsViewerComponent } from './products/products-viewer/products-viewer.component';
import { ProductViewerComponent } from './products/product-viewer/product-viewer.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';
import { QuestionnaireViewerComponent } from './questionnaires/questionnaire-viewer/questionnaire-viewer.component';
import { QuestionsViewerComponent } from './questions/questions-viewer/questions-viewer.component';
import { QuestionViewerComponent } from './questions/question-viewer/question-viewer.component';
import { QuestionEditorComponent } from './questions/question-editor/question-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: StoreComponent },
	{ path: 'products', redirectTo: 'products/page/1', pathMatch: 'full' },
	{ path: 'products/page/:nr', component: ProductsViewerComponent },
  { path: 'product/:id', component: ProductViewerComponent },
	{ path: 'product/:id/edit', component: ProductEditorComponent },
  { path: 'questionnaire', redirectTo: 'questionnaire/page/1', pathMatch: 'full' },
  { path: 'questionnaire/page/:nr', component: QuestionnaireViewerComponent },  
  { path: 'questions', redirectTo: 'questions/page/1', pathMatch: 'full' },
  { path: 'questions/page/:nr', component: QuestionsViewerComponent },
  { path: 'question/:id', component: QuestionViewerComponent },
  { path: 'question/:id/edit', component: QuestionEditorComponent }  
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:true});