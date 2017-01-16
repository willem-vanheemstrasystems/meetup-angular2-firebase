import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HomeComponent, DialogContent } from './home/home.component';
import { LessonsService } from "./shared/model/lessons.service";
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [LessonsService],
  entryComponents: [DialogContent],  
  bootstrap: [AppComponent]
})
export class AppModule { }
